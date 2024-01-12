// Garph Bar
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20', '25', '30', '35', '40', '60', '65'],
    datasets: [{
      label: 'Employee : K 52.500',
      data: [50, 100, 130, 180, 200, 250, 300], 
      borderWidth: 1,
      backgroundColor: '#7380ec'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    }
  }
});

//side-bar
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggler");
// show side-bar
menuBtn.addEventListener('click',()=>{
  sideMenu.style.display='block';
})
// Close side-bar
closeBtn.addEventListener('click',()=>{
  sideMenu.style.display='none';
})
// Change Theme
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme-variable');
})


