document.getElementById('outM').addEventListener('click',function(){
    console.log('Cash Out');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');

})
document.getElementById('addM').addEventListener('click',function(){
    console.log('Add money');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');

})