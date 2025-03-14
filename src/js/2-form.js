const form = document.querySelector('.feedback-form'); // Отримуємо форму

// Об'єкт для збереження даних форми
let formData = { email: '', message: '' };

// Ключ для локального сховища
const STORAGE_KEY = 'feedback-form-state';

// Функція для оновлення LocalStorage
const updateStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Функція для завантаження даних із LocalStorage
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
};

// Відстежуємо подію input на формі
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim(); // Видаляємо зайві пробіли
  updateStorage(); // Оновлюємо LocalStorage
});

// Обробка події submit
form.addEventListener('submit', event => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  if (!formData.email || !formData.message) {
    alert('Fill please all fields'); // Якщо поля порожні, виводимо сповіщення
    return;
  }

  console.log(formData); // Виводимо об'єкт у консоль

  localStorage.removeItem(STORAGE_KEY); // Очищаємо LocalStorage
  formData = { email: '', message: '' }; // Очищаємо об'єкт
  form.reset(); // Очищаємо форму
});

// Викликаємо функцію заповнення форми при завантаженні сторінки
loadFormData();
