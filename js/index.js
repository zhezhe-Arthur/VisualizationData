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
    tooltip: {
      // formatter: "{a}：{c}%",
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56'
        }
      }
    },
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
        name: '合格率',
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
        name: '',
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
})();
(function() {
  let myChart = echarts.init(document.querySelector('.line .chart'))
  option = {
    color: ['#00f3f1', '#ed3f35'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd',
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 边框显示
      borderColor: '#012f4a', // 颜色
      containLabel: true // 刻度值
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '十月', '十一月', '十二月'],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: false, // 去除轴间距
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#4c9bfd'
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    series: [
      {
        name: '任务',
        type: 'line',
        smooth: true, // 圆滑
        data: [128, 132, 141, 134, 140, 430, 210, 51, 321, 324, 54, 79]
      },
      {
        name: '计划任务',
        type: 'line',
        smooth: true,
        data: [220, 100, 143, 234, 420, 330, 310, 77, 232, 56, 123, 90]
      }
    ]
    
  };
  myChart.setOption(option);
  // 图表大小自适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();
(function() {
  let myChart = echarts.init(document.querySelector('.itLine .chart'))
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      },
      right: '10%'
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        // 刻度标签
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#4c9bfd',
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        axisLine: {
          show: false // 去除轴线
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#4c9bfd',
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '1车间',
        type: 'line',
        smooth: true, // 圆滑
        lineStyle: {
          color: '#0184d5',
          width: 2
        },
        // 填充区域
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.9)"
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.9)"
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)" // 阴影
        },
        // 拐点设置
        symbol: "circle",
        symbolSize: 6,
        showSymbol: false,
        // 拐点样式
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [248, 345, 297, 334, 275, 184, 322]
      },
      {
        name: "2车间",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [213, 145, 277, 378, 230, 482, 223]
      }
    ]
  };
  myChart.setOption(option);
  // 图表大小自适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();
(function() {
  myChart = echarts.init(document.querySelector('.per .chart'))
  option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // orient: 'vertical', // 垂直居中
      bottom: '1%',
      // 图标的设置
      itemWidth: 10,
      itemHight: 10,
      // 文字设置
      textStyle: {
        fontSize: 12,
        color: 'rgba(255,255,255,.5)'
      },
    },
    series: [
      {
        name: '本月任务',
        type: 'pie',
        // 水平和垂直居中位置
        center: ['50%', '45%'],
        // 内圆半径和外圆半径
        radius: ['45%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          // position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '10',
            fontWeight: 'bold'
          }
        },
        // 连接线
        labelLine: {
          show: true
        },
        data: [
          {value: 234, name: '不合格任务'},          
          {value: 310, name: '进行中的任务'},
          {value: 1335, name: '合格任务'},
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 图表大小自适应
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();
(function() {
  myChart = echarts.init(document.querySelector('.itpie .chart'))
  option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    legend: {
      // orient: 'vertical', // 垂直居中
      bottom: '1%',
      // 图标的设置
      itemWidth: 10,
      itemHight: 10,
      // 文字设置
      textStyle: {
        fontSize: 12,
        color: 'rgba(255,255,255,.5)'
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: '地区',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '45%'],
        // roseType: 'area', // 面积模式radius
        roseType: 'radius', // 半径模式
        label: {
          show: true,
          // position: 'center',
          fontSize: 10
        },
        labelLine: {
          // 文字连接线的长度
          length: 6,
          length2: 8
        },
        data: [
          {value: 2034, name: '一号车间'},
          {value: 3078, name: '二号车间'},
          {value: 2168, name: '三号车间'},
          {value: 2319, name: '四号车间'},
          {value: 3335, name: '五号车间'},
        ]
      }
    ]
  }
  myChart.setOption(option)
  window.addEventListener('resize', function() {
    myChart.resize()
  })
})();
(function() {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028]
  };

  var XAData = [
    [{ name: "深圳" }, { name: "拉萨", value: 100 }],
    [{ name: "深圳" }, { name: "上海", value: 100 }],
    [{ name: "深圳" }, { name: "北京", value: 100 }],
    [{ name: "深圳" }, { name: "西宁", value: 100 }],
    [{ name: "深圳" }, { name: "银川", value: 100 }]
  ];

  var XNData = [
    [{ name: "南京" }, { name: "北京", value: 100 }],
    [{ name: "南京" }, { name: "上海", value: 100 }],
    [{ name: "南京" }, { name: "武汉", value: 100 }],
    [{ name: "南京" }, { name: "西安", value: 100 }],
    [{ name: "南京" }, { name: "深圳", value: 100 }]
  ];

  var YCData = [
    [{ name: "北京" }, { name: "潍坊", value: 100 }],
    [{ name: "北京" }, { name: "哈尔滨", value: 100 }],
    [{ name: "北京" }, { name: "上海", value: 100 }],
    [{ name: "北京" }, { name: "西安", value: 100 }],
    [{ name: "北京" }, { name: "深圳", value: 100 }]
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["深圳", XAData],
    ["南京", XNData],
    ["北京", YCData]
  ].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function(params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      }
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "12%",
      data: ["深圳 Top3", "南京 Top3", "北京 Top3"],
      textStyle: {
        color: "#fff"
      },
      selectedMode: "multiple"
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff"
        }
      },
      // 把中国地图放大了1.23倍
      zoom: 1.23,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor: "#195BB9",
          borderWidth: 1
        },
        emphasis: {
          areaColor: "#2B91B7"
        }
      }
    },
    series: series
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();