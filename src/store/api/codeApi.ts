import axios from 'axios';

export async function getAccessToken() {
  try {
    const response = await axios.post<AccessTokenResponse>('https://pai-kg.joinposter.com/api/v2/auth/access_token', 'application_id=3155&application_secret=c021dee814b127969ffc46259972a1a3&grant_type=authorization_code&redirect_uri=https%3A%2F%2Fpai-kg.joinposter.com%2Fposter%2Fauth&code=2d1bda991b3b38e7c5c0de1695955666', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении токена доступа:', error);
    throw error;
  }
}

export interface AccessTokenResponse {
  access_token: string;
  // Другие поля
}
