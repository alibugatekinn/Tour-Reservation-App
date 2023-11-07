
import { notification } from 'antd'; // Üstteki importlara eklenecek

export const loginUser = async (email, password, setSignIn, setEmail, setPassword) => {
    // Giriş fonksiyonunun içeriği burada olacak.
    // Placeholder, gerçek uygulama için uygun olmayabilir.
  };
  
  export const logoutUser = async (setSignIn, setEmail, setPassword) => {
    try {
      const response = await fetch('http://localhost:56000/api/users/logout', {
        method: 'POST', // veya 'GET', API'nizin tasarımına bağlı
        credentials: 'include', // Çerezleri dahil etmek için
      });
  
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Çıkış işleminde bir hata oluştu.');
      }
  
      notification.success({
        message: 'Çıkış Yapıldı',
        description: 'Başarıyla çıkış yapıldı.',
        placement: 'top', // Bildirimi ekranın üst kısmında göster
      });
  
      
      setEmail('');
      setPassword('');
      setSignIn(false);
    } catch (error) {
      notification.error({
        message: 'Çıkış Yapılamadı',
        description: error.message || 'Çıkış yaparken bir hata oluştu.',
        placement: 'top', // Bildirimi ekranın üst kısmında göster
      });
      console.error('Çıkış yapılırken hata:', error);
    }
  };
  
  export const signupUser = async (email, password, setSignIn, setEmail, setPassword, notification) => {
    // Kayıt fonksiyonunun içeriği burada olacak.
    // Placeholder, gerçek uygulama için uygun olmayabilir.
  };
  