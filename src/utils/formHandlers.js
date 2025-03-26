export const validateForm = (formData, rules = defaultRules) => {
  const errors = {};
  const validators = {
    required: value => !!value?.trim() || 'This field is required',
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Invalid email format',
    phone: value => !value || /^\+?[\d\s-()]{10,}$/.test(value) || 'Invalid phone format'
  };

  Object.entries(rules).forEach(([field, fieldRules]) => {
    Object.entries(fieldRules).forEach(([rule, enabled]) => {
      if (enabled && validators[rule]) {
        const validationResult = validators[rule](formData[field]);
        if (validationResult !== true) {
          errors[field] = validationResult;
        }
      }
    });
  });

  return errors;
};

export const handleFormSubmit = async (url, formData, options = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeout || 10000);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return { success: response.ok };
  } catch (error) {
    return { 
      success: false, 
      error: error.name === 'AbortError' ? 'Request timed out' : 'Submission failed'
    };
  }
};

export const SUBMISSION_LIMIT = 3;
export const SUBMISSION_WINDOW = 3600000; // 1 hour

export const defaultRules = {
  name: { required: true },
  email: { required: true, email: true },
  phone: { phone: true },
  subject: { required: true },
  message: { required: true }
};
