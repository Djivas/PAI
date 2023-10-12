import axios from 'axios';

export async function sendVerificationCode() {
  try {
    const response = await axios.get<VerificationResponse>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/sendVerificationCode', {
      params: {
        key: 'YOUR_API_KEY', // Замените на свой ключ
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при запросе отправки кода верификации:', error);
    throw error;
  }
}

export interface VerificationResponse {
  verificationId: string;
  // Другие поля
}
