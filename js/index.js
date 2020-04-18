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
(function(){
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  let myChart = echarts.init(document.querySelector('.itBar .chart'))
  option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      containLabel: false
    },
    xAxis: {
      // 不显示
      show: false
    },
    yAxis: [
      {
        type: 'category',
        data: [ '一号车间', '二号车间', '三号车间', '四号车间', '五号车间'],
        // 是否反向坐标
        inverse: true,
        axisLine: {
          show: false
        },
        // 刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
      },
      {
        data: [ '435', '756', '567', '78', '978'],
        // 是否反向坐标
        inverse: true,
        axisLine: {
          show: false
        },
        // 刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        },
      }
    ],
    series: [
      {
        name: '2011年',
        type: 'bar',
        data: [23, 65, 45, 36, 75],
        itemStyle: {
          barBorderRadius: 20,
          color: function(params) {
            return myColor[params.dataIndex]
          }
        },
        // 层叠
        yAxisIndex: 0,
        // 间距
        barCategoryGap: 50,
        // 宽度
        barWidth: 10,
        // 柱子里的文字
        label: {
          formatter: "{c}%",
          show: true,
          position: 'inside'
        }
      },
      {
        name: '2012年',
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        barCategoryGap: 50,
        // 宽度
        barWidth: 15,
        // 层叠
        yAxisIndex: 1,
        itemStyle: {
          color: 'none',
          borderWidth: 3,
          borderColor: '#00c1de',
          barBorderRadius: 15,
        }
      }
    ]
  };
  myChart.setOption(option);
  // 图表大小自适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})()