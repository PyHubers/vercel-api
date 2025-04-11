export default async function handler(req, res) {
    // Разрешаем CORS (для запросов из C#)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    // Поддержка CORS для предварительных OPTIONS-запросов
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Только POST-запросы
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Только POST!' });
    }
  
    try {
      const { clientId } = req.body;
      console.log('📦 Получен клиент:', clientId);
  
      // Ответ для C#
      return res.status(200).json({
        success: true,
        clientId: clientId,
        message: `Клиент ${clientId} обработан!`
      });
  
    } catch (error) {
      console.error('Ошибка:', error);
      return res.status(500).json({ error: 'Серверная ошибка' });
    }
  }
