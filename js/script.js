console.log("Hi, welcome to my Portfolio Site :)")
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  var icon = x.querySelector('.icon i');

  if (x.className === 'navtoggle') {
      x.className += ' responsive';
      icon.classList.add('down'); // Rotate the icon
  } else {
      x.className = 'navtoggle';
      icon.classList.remove('down'); // Reset the rotation
  }
}

$(".rotate").click(function() {
  $(this).toggleClass("down"); 
});

jQuery(function(){
  
    var firstSelected = 0;
    
    var seed = [
        { title: "Organisation", value:  20, color: "#FF8D19" },
        { title: "Visual Design", value:  15, color: "#5F9BAB" },
        { title: "HTML", value : 5,  color: "#011E39" },
        { title: "Empathy", value:  20, color: "#FF8D19" },
        { title: "User-Research & Testing", value:  10, color: "#5F9BAB" },
        { title: "Communication", value:  20, color: "#FF8D19" },
        { title: "Figma", value : 15, color: "#011E39" },
        { title: "Protoyping", value : 10, color: "#5F9BAB" },
        { title: "Problem Solving", value : 20, color: "#FF8D19" },
        { title: "CSS", value : 5,  color: "#011E39" },
        { title: "Wireframing", value : 10, color: "#5F9BAB" },

      ];

    var seed2 = [
        { value : 20,  color: "#FF8D19" },
        { value : 15, color: "#5F9BAB" },
        { value:  5, color: "#011E39" },
        { value:  20, color: "#FF8D19" },
        { value : 10, color: "#5F9BAB" },
        { value : 20, color: "#FF8D19" },
        { value : 15, color: "#011E39" },
        { value : 10, color: "#5F9BAB" },
        { value : 20, color: "#FF8D19" },
        { value:  5, color: "#011E39" },
        { value : 10, color: "#5F9BAB" },
      ];
      
    var chartOptions = {
        baseOffset: 0,
        segmentShowStroke : false,
        segmentStrokeColor : 'transparent',
        baseColor: 'transparent',
        percentageInnerCutout : 60,        
        onPathEnter: function (e, data) {
            var order = $(this).data().order;
            $('#doughnutChart .doughnutSummaryTitle').html(data[order].title);
            $('#doughnutChart .doughnutSummary').show();
            $('#doughnutBg g').find('path').fadeOut(300);
            $('#doughnutBg g').find('path:eq('+(order)+')').fadeIn(500)            
        },
        onPathLeave: function (e, data) {
            $('#doughnutBg g').find('path').fadeOut(300);
            $('#doughnutChart .doughnutSummary').hide();
        },
        afterDrawed : function () {
            $('#doughnutChart .doughnutSummaryTitle').html(seed[firstSelected].title);           
            $('#doughnutChart .doughnutSummary').css({width: '160px', height: '60px', marginLeft: '-80px', marginTop: '-30px'});
            $('#doughnutChart .doughnutSummary').show();
            $('#doughnutBg g').find('path:eq('+firstSelected+')').fadeIn(500);
        }
    } ;
 
    var chartOptions2 = {
        baseOffset: 0,
        segmentStrokeColor : 'transparent',        
        segmentShowStroke : false,
        percentageInnerCutout : 95
    } ;

    jQuery("#doughnutChart").drawDoughnutChart(seed, chartOptions);
    jQuery("#doughnutBg").drawDoughnutChart(seed2, chartOptions2);

});
