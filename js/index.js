(function() {
  let myChart = echarts.init(document.querySelector(".bar .chart"))
  let option = {
    color: ['#2F89CF'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        axisTick: {
          alignWithLabel: true
        },
        // 刻度标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        // x轴的线
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // 刻度标签样式
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        axisLine: {
          // 线的样式
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 2
          }
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          }
        }
      }
    ],
    series: [
      {
        name: '合格任务',
        type: 'bar',
        barWidth: '32%',
        data: [105, 252, 430, 336, 380, 330, 240],
        itemStyle: {
          barBorderRadius: 4
        }
      }
    ]
  }
  myChart.setOption(option);
  // 图表大小自适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();