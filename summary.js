var phone = ['samsung', 'xaomi', 'redmi', 'lg', 'waltone', 'sony'];
phone[2] = 'huawei';
if (phone.indexOf('xaomi') == -1) {
    console.log('Phone is Not avilible');
} else {
    console.log('phone is avilble')
}
if (phone.indexOf('lg') != -1) {
    console.log('Phone is Avilable');
}