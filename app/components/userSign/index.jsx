"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import useStore from '../../state management/store';
import { notification } from 'antd'; // Üstteki importlara eklenecek
export default function UserSign() {
  const { signIn, setSignIn, email, setEmail, password, setPassword, signModal, setSignModal } = useStore();
const [loginButtonLoading, setLoginButtonLoading] =useState(false);
const formRef = useRef(null); // Form referansı oluşturuldu



  // signInUser fonksiyonu daha önceden olduğu gibi varsayılır
  
  const signInUser = async () => {
    const userData = {
      email: email,
      password: password
    };
  
    try {
      const response = await fetch('https://seashell-app-8ha6z.ondigitalocean.app/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Çerezleri dahil et
        body: JSON.stringify(userData)
      });
  
      if (!response.ok) {
        // Response ok değilse, yanıtın JSON olup olmadığını kontrol et ve bir hata fırlat
        const errData = await response.json();
        throw new Error(errData.message || 'Beklenmeyen bir hata oluştu'); // Hata mesajı atıldı
        setEmail('');
        setPassword('');
      }
      
      const data = await response.json();
      console.log(data);
      // login başarılı olduğunda bildirim göster
      notification.success({
        message: 'Giriş Başarılı',
        description: 'Başarıyla giriş yaptınız.',
        placement: 'top',
      });
      setSignIn(true); // Varsayılan kullanımınıza bağlı olarak signIn durumunu güncelle
      setSignModal(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      // Hata durumunda bildirim göster
      notification.error({
        message: 'Giriş Başarısız',
        description: error.message || 'Giriş yaparken bir hata oluştu.',
        placement: 'top',
      });
      setEmail('');
      setPassword('');
      console.error('Login sırasında hata:', error.message || error);
    }
  };
  
  
  



useEffect(() => {
  // Asenkron fonksiyonumuzu tanımlıyoruz.
  const checkUser = async () => {
    try {
      // Fetch isteğini await ile asenkron bir şekilde bekliyoruz.
      const response = await fetch('https://seashell-app-8ha6z.ondigitalocean.app/api/users/isUser', {
        method: 'GET',
        credentials: 'include', // Tarayıcının çerezleri göndermesini sağlar.
      });

      // İsteğin başarılı olup olmadığını kontrol ediyoruz.
      if (!response.ok) {
        // İstek başarısızsa, hatayı JSON olarak alıp throw kullanarak hata atıyoruz.
        const errData = await response.json();
        throw new Error(errData.error);
      }
      console.log("response hataya girmedi. resppnse okay")
      setSignIn(true);
      //setSignModal(false);
      // Yanıtı JSON'a dönüştürüyoruz.
      const data = await response.json();

      // Data ile ilgili işlemler yapabiliriz.
      if (data.message === "no token") {
        setSignIn(false);
        //setSignModal(true);
        
      }
      
      
      
      
      
    } catch (error) {
      // Hataları yakalıyoruz.
      console.error('Hata:', error.message);
      setSignIn(false); // Hata durumunda kullanıcıyı giriş yapmaya yönlendiriyoruz.
    }
  };

  // Fonksiyonumuzu çağırıyoruz.
  checkUser();
}, []);



  const handleCancel = () => {

    formRef.current.resetFields(); // Formu sıfırla
    setSignModal(false);

  };

  

  const onFinish = () => {
    setLoginButtonLoading(true);
    signInUser();
    setLoginButtonLoading(false);
    formRef.current.resetFields(); // Formu sıfırla

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="p-5">

      <Modal title="Kullanıcı Girişi" open={signModal} footer={null} closable={true} onCancel={handleCancel}>
        <Form
        ref={formRef}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item 
          className=' w-full'
            label={<div className='w-1/2'>Email</div>}
            name="username"
            rules={[{ required: true, message: 'Lütfen kullanıcı adınızı girin!' }]}
          >
<Input value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-lg' />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="password"
            rules={[{ required: true, message: 'Lütfen şifrenizi girin!' }]}
          >
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} className=' rounded-lg' />
          </Form.Item>

          <Form.Item className="text-center">
            <Button loading={loginButtonLoading} type="primary" htmlType="submit" className="bg-red-500 hover:bg-red-600">
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
