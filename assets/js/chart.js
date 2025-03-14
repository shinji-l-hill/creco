/* 

棒+折れ線グラフの関数
------------------------*/


function createChart(canvasId, chartData) {
      const ctx = document.querySelector(canvasId).getContext('2d');

      const config = {
            type: 'bar',
            data: {
                  labels: ["", "", "", "", "", "", ""],
                  datasets: [
                        {
                              type: 'line',
                              label: chartData.label || 'ネガティブ回答比率', // デフォルトは「ネガティブ回答比率」
                              data: chartData.negativeRatio, // ネガティブ回答比率のデータ
                              borderColor: '#3181B0',
                              backgroundColor: '#3181B0',
                              borderWidth: 2,
                              fill: false,
                              yAxisID: 'yRight',
                              order: 1, // 折れ線グラフを上のレイヤーに
                              pointLabels: { display: false } // データラベルを非表示に
                        },
                        {
                              type: 'bar',
                              label: '評価',
                              data: chartData.evaluation, // 評価のデータ
                              backgroundColor: '#FFCF98',
                              borderColor: '#FFCF98',
                              borderWidth: 1,
                              yAxisID: 'yLeft',
                              order: 2 // 棒グラフを下のレイヤーに
                        }
                  ]
            },
            options: {
                  responsive: false,
                  maintainAspectRatio: false,  // 縦横比を維持
                  aspectRatio: 1 / .645,
                  plugins: {
                        legend: { display: false }, // 凡例を非表示
                        tooltip: { enabled: false } // ツールチップを非表示
                  },
                  scales: {
                        yLeft: {
                              type: 'linear',
                              position: 'left',
                              min: 0,
                              max: 5,
                              ticks: {
                                    stepSize: 2.5,
                                    color: '#FC8C60', // yLeft（評価）の目盛りの色
                                    callback: function (value) {
                                          return value === 5 || value === 2.5 || value === 0 ? value : '';
                                    }
                              },
                              title: { display: false, text: '評価' }
                        },
                        yRight: {
                              type: 'linear',
                              position: 'right',
                              min: 0,
                              max: 25,
                              reverse: true, // 0%が上、25%が下
                              ticks: {
                                    stepSize: 12.5, // 12% → 12.5% に修正
                                    color: '#3181B0', // yRight（ネガティブ回答比率）の目盛りの色
                                    callback: function (value) {
                                          value = Math.round(value * 10) / 10; // 小数誤差を防ぐ
                                          return [0, 12.5, 25].includes(value) ? value + '%' : '';
                                    }
                              },
                              title: { display: false, color: 'blue', text: chartData.label || 'ネガティブ回答比率' } // ラベルを変更できるように
                        }
                  }
            }
      };

      new Chart(ctx, config);
}

// 各グラフのデータを定義



//マッチング満足度調査
const chart2Data = {
      negativeRatio: [25, 20, 5.7, 12.5, 0, 10.5, 3.2],//オレンジの棒グラフ
      evaluation: [3, 3.8, 3.83, 3.86, 4.12, 4, 4]//折れ線グラフ
};

//エンジニア数、離職率
const chart3Data = {
      negativeRatio: [25, 20, 5.7, 12.5, 0, 10.5, 3.2],//オレンジの棒グラフ
      evaluation: [3, 3.8, 3.83, 3.86, 4.12, 4, 4]//折れ線グラフ
};
//業績推移
const chart4Data = {
      negativeRatio: [25, 20, 5.7, 12.5, 0, 10.5, 3.2],//オレンジの棒グラフ
      evaluation: [3, 3.8, 3.83, 3.86, 4.12, 4, 4]//折れ線グラフ
};
//eLV
const chart5Data = {
      negativeRatio: [25, 20, 5.7, 12.5, 0, 10.5, 3.2],//オレンジの棒グラフ
      evaluation: [3, 3.8, 3.83, 3.86, 4.12, 4, 4]//折れ線グラフ
};
//ESMC
const chart6Data = {
      negativeRatio: [25, 20, 5.7, 12.5, 0, 10.5, 3.2],//オレンジの棒グラフ
      evaluation: [3, 3.8, 3.83, 3.86, 4.12, 4, 4]//折れ線グラフ
};


// 棒グラフを描画

//エンジニア満足度調査
$("#js-graph-fact01").one("inview", function (event, isInView) {
      //エンジニア満足度調査
      const chart1Data = {
            negativeRatio: [25, 20, 5.7, 12.5, 0, 10.5, 3.2],//オレンジの棒グラフ
            evaluation: [3, 3.8, 3.83, 3.86, 4.12, 4, 4]//折れ線グラフ
      };
      if (isInView) {
            createChart('#js-graph-fact01', chart1Data);
      }
});
//マッチング満足度調査
$("#js-graph-fact02").one("inview", function (event, isInView) {
      if (isInView) {
            createChart('#js-graph-fact02', chart2Data);
      }
});
//エンジニア数、離職率
$("#js-graph-fact03").one("inview", function (event, isInView) {
      if (isInView) {
            createChart('#js-graph-fact03', chart3Data);
      }
});
//業績推移
$("#js-graph-fact07").one("inview", function (event, isInView) {
      if (isInView) {
            createChart('#js-graph-fact07', chart4Data);
      }
});
//eLV
$("#js-graph-fact09").one("inview", function (event, isInView) {
      if (isInView) {
            createChart('#js-graph-fact09', chart5Data);
      }
});
//ESMC
$("#js-graph-fact10").one("inview", function (event, isInView) {
      if (isInView) {
            createChart('#js-graph-fact10', chart6Data);
      }
});


/* 

ドーナツ型グラフの関数
------------------------*/

//Chart.plugins.unregister(ChartDataLabels); // グローバルな登録を解除
function createDoughnutChart(canvasDoughnutId, chartDoughnutData) {
      var ctx = document.querySelector(canvasDoughnutId).getContext('2d');
      var chart = new Chart(ctx, {
            type: 'doughnut',

            data: {
                  labels: chartDoughnutData.labels, // ラベルデータ
                  datasets: [{
                        label: '回答', // データセット名
                        data: chartDoughnutData.datas, // データ
                        backgroundColor: chartDoughnutData.colors,
                        datalabels: { // 値ラベル設定
                              color: '#333', // 色
                              font: {
                                    size: 10
                              },
                              formatter: function (value, context) {
                                    return value + '';
                              }
                        }
                  }],
            },

            plugins: [ChartDataLabels], // プラグイン設定

            options: {
                  responsive: false, // レスポンシブ対応
                  maintainAspectRatio: false, // 縦横比の固定を解除
                  //aspectRatio: 1,
                  cutoutPercentage: 50, //中央からの空円の太さ。グラフの太さ変更
                  plugins: {
                        legend: {
                              display: true,  // 凡例を表示
                              position: window.innerWidth < 768 ? 'top' : 'right', // 初期位置を設定
                              align: window.innerWidth < 768 ? 'center' : 'start', // 初期位置を設定
                              labels: {
                                    padding: 5, // ラベルの余白調整
                                    boxWidth: 12, // カラーボックスのサイズ調整
                                    font: { size: 10 } // 文字サイズ
                              }
                        },
                        tooltip: { enabled: false }, // ツールチップを非表示


                  },
                  layout: {
                        padding: {
                              top: 0, right: 0, left: 0, bottom: 0 // 余白
                        }
                  },

                  onResize: function (chart) {
                        //console.log('ウィンドウ幅:', window.innerWidth); // デバッグ用

                        setTimeout(() => {
                              if (window.innerWidth < 768) {
                                    // スマホの場合
                                    chart.options.plugins.legend.position = 'top';
                                    chart.options.plugins.legend.align = 'center';
                              } else {
                                    // PC の場合
                                    chart.options.plugins.legend.position = 'right';
                                    chart.options.plugins.legend.align = 'start';
                              }
                              chart.update(); // 変更を反映
                        }, 100); // 100ms 遅延で確実に適用
                  }
            }
      });
}

//年齢別エンジニア数

const chartDoughnutData01 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-fact04").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-fact04', chartDoughnutData01);
      }
});
//リモートワーク (日数/週)

const chartDoughnutData02 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-fact05").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-fact05', chartDoughnutData02);
      }
});
//残業時間 (時間／月)
const chartDoughnutData03 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-fact06").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-fact06', chartDoughnutData03);
      }
});
//単金別件数比率
const chartDoughnutData04 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-fact08").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-fact08', chartDoughnutData04);
      }
});



/*
エンジニア満足度調査
 ---------------------*/
//自分の会社が良い会社だと思えるか？（友人に勧められるか？）
const chartDoughnutData_enginer01 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer01").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer01', chartDoughnutData_enginer01);
      }
});


//今の現場への満足度
const chartDoughnutData_enginer02 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer02").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer02', chartDoughnutData_enginer02);
      }
});


//顧客からのフィードバックを得られているか
const chartDoughnutData_enginer03 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer03").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer03', chartDoughnutData_enginer03);
      }
});

//担当営業の顧客への対応について 適切だと感じますか?
const chartDoughnutData_enginer04 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer04").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer04', chartDoughnutData_enginer04);
      }
});

//バックオフィスサービス全体について
const chartDoughnutData_enginer05 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer05").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer05', chartDoughnutData_enginer05);
      }
});

//事務手続きについて各種申請や手順書などにストレスを感じていませんか
const chartDoughnutData_enginer06 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer06").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer06', chartDoughnutData_enginer06);
      }
});

//各種手当てについて
const chartDoughnutData_enginer07 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer07").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer07', chartDoughnutData_enginer07);
      }
});


//各種ルールについて
const chartDoughnutData_enginer08 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer08").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer08', chartDoughnutData_enginer08);
      }
});


//福利厚生(金銭以外の報酬)について
const chartDoughnutData_enginer09 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer09").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer09', chartDoughnutData_enginer09);
      }
});


//自己成長感について
const chartDoughnutData_enginer10 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer10").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer10', chartDoughnutData_enginer10);
      }
});


//キャリアプランについて会社が配慮していると感じるか
const chartDoughnutData_enginer11 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer11").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer11', chartDoughnutData_enginer11);
      }
});

//働きやすい環境について会社が配慮していると感じるか
const chartDoughnutData_enginer12 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer12").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer12', chartDoughnutData_enginer12);
      }
});

//組織風土について 社内メンバーと仲間意識を感じますか?
const chartDoughnutData_enginer13 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer13").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer13', chartDoughnutData_enginer13);
      }
});

//単金について
const chartDoughnutData_enginer14 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer14").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer14', chartDoughnutData_enginer14);
      }
});

//CRE-CO(共同体)への貢献度について
const chartDoughnutData_enginer15 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer15").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer15', chartDoughnutData_enginer15);
      }
});

//フォローについて良いアドバイスをもらていると感じますか
const chartDoughnutData_enginer16 = {
      labels: ['テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト', 'テキスト',], datas: [38.6, 34.1, 9.1, 6.8, 4.5, 2.3, 2.3, 2.3],
      colors: ['#FC8C60', '#FFCF98', '#FFFEEA', 'aqua', 'skyblue', '#AFEEEE', '#33CCCC', '#E0FFFF'],
}
$("#js-graph-engineer16").one("inview", function (event, isInView) {
      if (isInView) {
            createDoughnutChart('#js-graph-engineer16', chartDoughnutData_enginer16);
      }
});