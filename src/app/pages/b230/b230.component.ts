import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b230',
  templateUrl: './b230.component.html',
  styleUrls: ['./b230.component.scss']
})
export class B230Component implements OnInit {

  // 新增屬性及內容
  stands = [
    { img:'../../../assets/Image/Coach/237.jpg',hrf:'https://www.facebook.com/janicewa2002',name:'麗瑜', title:'SSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/233.jpg',hrf:'https://www.facebook.com/profile.php?id=100004661648909',name:'Kayla', title:'駐店教練\nSSI 開放水域潛水員教練\nSSI 自由潛水 LV1 教練\nSSI 美人魚教練' },
    { img:'../../../assets/Image/Coach/236.jpg',hrf:'https://www.facebook.com/xueqian91',name:'薛', title:'SSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/222.jpg',hrf:'https://www.facebook.com/jialing.hu.37',name:'佳伶', title:'駐店教練\nSSI 助理教練' },
    { img:'../../../assets/Image/Coach/235.jpg',hrf:'https://www.facebook.com/profile.php?id=100000343460900',name:'江江', title:'SSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/229.jpg',hrf:'',name:'維萱', title:'SSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/234.jpg',hrf:'',name:'佑佑', title:'SSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/217.jpg',hrf:'',name:'玟嬡 Aiko', title:'SSI 助理教練訓練官\nSSI 自由潛水助理教練' },
    { img:'../../../assets/Image/Coach/200.jpg',hrf:'',name:'Tracy', title:'SSI 進階潛水員教練' },
    { img:'../../../assets/Image/Coach/118.jpg',hrf:'',name:'小米', title:'SSI 進階潛水員教練' },
    { img:'../../../assets/Image/Coach/203.jpg',hrf:'',name:'Annie', title:'SSI 專長潛水員教練\nSSI 攝影專長教練' },
    { img:'../../../assets/Image/Coach/205.jpg',hrf:'',name:'Sophie', title:'SSI 專長潛水員教練' },
    { img:'../../../assets/Image/Coach/219.jpg',hrf:'',name:'晢錡', title:'SSI 專長潛水員教練' },
    { img:'../../../assets/Image/Coach/213.jpg',hrf:'',name:'小胖 Sunny', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/146.jpg',hrf:'',name:'詩雅', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/145.jpg',hrf:'',name:'TTC', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/141.jpg',hrf:'',name:'花花', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/113.jpg',hrf:'',name:'彥儒', title:'駐店教練\nSSI 助理教練訓練官' },
    { img:'../../../assets/Image/Coach/230.jpg',hrf:'',name:'阿甘', title:'駐店教練\nSSI 潛水教練培訓官\nSSI 自由潛水教練訓練官' },
    { img:'../../../assets/Image/Coach/238.jpg',hrf:'',name:'黃上', title:'駐店教練\nSSI 助理教練訓練官\nSSI 自由潛水 LV2 教練' },
    { img:'../../../assets/Image/Coach/202.jpg',hrf:'',name:'東陸', title:'駐店教練\nSSI 進階潛水員教練\nECO生態潛水員教練' },
    { img:'../../../assets/Image/Coach/126.jpg',hrf:'',name:'智堯', title:'駐店教練\nSSI 助理教練訓練官' },
    { img:'../../../assets/Image/Coach/239.jpg',hrf:'',name:'家輝', title:'SSI 自由潛水 LV2 教練' },
    { img:'../../../assets/Image/Coach/114.jpg',hrf:'',name:'伊暉', title:'駐店教練\nSSI 進階潛水員教練' },
    { img:'../../../assets/Image/Coach/225.jpg',hrf:'',name:'致維', title:'SSI 助理教練\nECO生態潛水員教練' },
    { img:'../../../assets/Image/Coach/155.jpg',hrf:'',name:'小陽', title:'SSI 自由潛水 LV2 教練' },
    { img:'../../../assets/Image/Coach/232.jpg',hrf:'',name:'子皓', title:'SSI 自由潛水 LV2 教練' },
    { img:'../../../assets/Image/Coach/206.jpg',hrf:'',name:'Jason', title:'SSI 助理教練訓練官\nSSI 技術潛水教練' },
    { img:'../../../assets/Image/Coach/116.jpg',hrf:'',name:'Jeffrey', title:'SSI 進階潛水員教練' },
    { img:'../../../assets/Image/Coach/123.jpg',hrf:'',name:'偉良', title:'SSI 進階潛水員教練\nSSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/214.jpg',hrf:'',name:'Brian', title:'SSI 進階潛水員教練\nSSI 攝影專長教練' },
    { img:'../../../assets/Image/Coach/228.jpg',hrf:'',name:'泰力 Tyler', title:'SSI 專長潛水員教練\nSSI 攝影專長教練' },
    { img:'../../../assets/Image/Coach/215.jpg',hrf:'',name:'永志', title:'SSI 專長潛水員教練\nSSI 自由潛水 LV1 教練' },
    { img:'../../../assets/Image/Coach/208.jpg',hrf:'',name:'沈欣緯', title:'SSI 專長潛水員教練' },
    { img:'../../../assets/Image/Coach/227.jpg',hrf:'',name:'勇成', title:'SSI 專長潛水員教練' },
    { img:'../../../assets/Image/Coach/220.jpg',hrf:'',name:'智偉', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/216.jpg',hrf:'',name:'阿源', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/138.jpg',hrf:'',name:'阿哲', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/136.jpg',hrf:'',name:'Jimmy', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/201.jpg',hrf:'',name:'于堯', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/209.jpg',hrf:'',name:'志陽', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/211.jpg',hrf:'',name:'熱狗', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/210.jpg',hrf:'',name:'美年', title:'SSI 專長潛水員教練' },
    { img:'../../../assets/Image/Coach/221.jpg',hrf:'',name:'聖祺', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/223.jpg',hrf:'',name:'曉雯', title:'SSI 助理教練' },
    { img:'../../../assets/Image/Coach/119.jpg',hrf:'',name:'明堃', title:'(醫療顧問)\nSSI 專長潛水員教練' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
