const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// استخدم body-parser لمعالجة البيانات المرسلة من خلال النماذج
app.use(bodyParser.urlencoded({ extended: true }));

// جعل مجلد "public" يستضيف ملفات HTML و CSS والصور والملفات الثابتة الأخرى
app.use(express.static(path.join(__dirname, 'public')));

// تحديد الصفحة الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// معالجة الطلبات المرسلة من نموذج الاتصال
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // هنا يمكنك إضافة منطق لحفظ البيانات أو إرسالها بالبريد الإلكتروني أو غير ذلك
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    // إعادة توجيه المستخدم لصفحة النجاح أو الصفحة الرئيسية بعد إرسال الرسالة
    res.send('تم إرسال رسالتك بنجاح!');
});

// بدء الاستماع للطلبات على المنفذ 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
