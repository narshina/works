document.addEventListener('DOMContentLoaded', () => {
    const btnMonthly = document.getElementById('btn-monthly');
    const btnYearly = document.getElementById('btn-yearly');
    const planTitle = document.getElementById('planTitle');
    const priceAmount = document.getElementById('priceAmount');
    const priceInterval = document.getElementById('priceInterval');
  
    const monthlyData = {
      title: 'Monthly Subscription',
      amount: '$5,120',
      interval: '/month'
    };
  
    const yearlyData = {
      title: 'Yearly Subscription',
      amount: '$52,224',
      interval: '/year'
    };
  
    if (btnMonthly && btnYearly) {
      btnMonthly.addEventListener('click', () => {
        btnMonthly.classList.add('active');
        btnYearly.classList.remove('active');
        planTitle.textContent = monthlyData.title;
        priceAmount.textContent = monthlyData.amount;
        priceInterval.textContent = monthlyData.interval;
      });
  
      btnYearly.addEventListener('click', () => {
        btnYearly.classList.add('active');
        btnMonthly.classList.remove('active');
        planTitle.textContent = yearlyData.title;
        priceAmount.textContent = yearlyData.amount;
        priceInterval.textContent = yearlyData.interval;
      });
    }

 
    const faqHeaders = document.querySelectorAll('.faqHeader');
    faqHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        
        document.querySelectorAll('.faqItem').forEach(faq => {
          faq.classList.remove('active');
        });
  
      
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
});
