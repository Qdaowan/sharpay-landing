/*
<script src="https://code.highcharts.com/highcharts.js"></script>
*/

Highcharts.theme = {
   colors: ['#517ff3', '#da4a39', '#f2b50e', '#009c59', '#ad44ba', '#10a9c0'],
   chart: { backgroundColor: null, style: { fontFamily: 'Verdana, sans-serif' } },
   title: {  style: { fontSize: '16px',  fontWeight: 'bold',  textTransform: 'uppercase' } },
   tooltip: { borderWidth: 0,  backgroundColor: 'rgba(219,219,216,0.8)', shadow: false  },
   legend: { itemStyle: {  fontWeight: 'bold', fontSize: '13px' } },
   xAxis: { gridLineWidth: 0, labels: { style: { fontSize: '12px' } }  },
   yAxis: { minorTickInterval: 'auto', title: { style: { textTransform: 'uppercase' } }, labels: { style: { fontSize: '12px' }  } },
   plotOptions: {  candlestick: { lineColor: '#404048' } },
   background2: '#F0F0EA'
};
Highcharts.setOptions(Highcharts.theme);

Highcharts.chart('tokenChart', {
    chart: { plotBackgroundColor: null, plotBorderWidth: 0, plotShadow: false },
    title: { text: '' },
    tooltip: { formatter: function() {  return this.point.desc + ': <b>' + this.y + ' млн</b>'; }  },
    plotOptions: { pie: { dataLabels: { enabled: true, distance: -25,  style: { fontWeight: 'bold', color: 'white', fontSize: '14px', } }, borderWidth: 0, startAngle: 0, endAngle: 0, shadow: false,  center: ['50%', '50%'] } },
    series: [{
        type: 'pie',
        name: 'Token Sale',
        colorByPoint: true,
        innerSize: '70%',
        data: [
			{ name: '80M', desc: 'Presale', y: 80 },
			{ name: '100M', desc: 'Бонус 40%', y: 100 },
			{ name: '300M', desc: 'Бонус 30%', y: 300 },
			{ name: '500M', desc: 'Бонус 20%', y: 500 },
			{ name: '520M', desc: 'Бонус 0%', y: 520 }
        ]
    }]
});

Highcharts.chart('emissionChart', {
    chart: { margin: [0, 0, 0, 0], spacing: [0, 0, 0, 0], plotBackgroundColor: null, plotBorderWidth: 0, plotShadow: false },
    title: { text: '' },
    tooltip: { formatter: function() {  return this.point.desc + ': <b>' + this.y + '%</b>'; }  },
    plotOptions: { pie: { size: 270, dataLabels: { enabled: true, distance: -20,  style: { fontWeight: 'bold', color: 'white', fontSize: '14px', } }, borderWidth: 0, startAngle: 0, endAngle: 0, shadow: false,  center: ['50%', '50%'] } },
    series: [{
        type: 'pie',
        name: 'Emission',
        colorByPoint: true,
        innerSize: '70%',
        data: [
            { name: '37%', desc: 'Свободная продажа', y: 37 },
			{ name: '31%', desc: 'Резерв системы', y: 31 },
			{ name: '15%', desc: 'Бонус команде', y: 15 },
			{ name: '7%', desc: 'Бонус инвесторам', y: 7 },
			{ name: '7%', desc: 'Вознаграждение эдвайзерам', y: 7 },
			{ name: '3%', desc: 'Баунти-программа', y: 3 }
        ]
    }]
});

Highcharts.chart('rashodChart', {
    chart: { margin: [0, 0, 0, 0], spacing: [0, 0, 0, 0], plotBackgroundColor: null, plotBorderWidth: 0, plotShadow: false },
    title: { text: '' },
    tooltip: { formatter: function() {  return this.point.desc + ': <b>' + this.y + '%</b>'; }  },
    plotOptions: { pie: { dataLabels: { enabled: true, distance: -25,  style: { fontWeight: 'bold', color: 'white', fontSize: '14px', } }, borderWidth: 0, startAngle: 0, endAngle: 0, shadow: false,  center: ['50%', '50%'] } },
    series: [{
        type: 'pie',
        name: 'Расходы',
        colorByPoint: true,
        innerSize: '70%',
        data: [
			{ name: '33%', desc: 'Разработка', y: 33 },
			{ name: '11%', desc: 'Персонал', y: 11 },
			{ name: '39%', desc: 'Маркетинг', y: 39 },
			{ name: '4%', desc: 'Юридические услуги', y: 4 },
			{ name: '9%', desc: 'Административные', y: 9 },
			{ name: '4%', desc: 'Прочие', y: 4 }
        ]
    }]
});
