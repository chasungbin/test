class Sensor {
    constructor(id){
        this.id = id
        //sensor을 동작상태 표시
        this.powerStatus = 'off'
        //status값
        this.status= ''
        //초기 시간값
        this.reportingInterval = 10000
    }

    turn(swIwtCh){
        //on 이벤트를 발생의 위한 조건문
        if(this.powerStatus === 'off' && swIwtCh === 'on'){
            //조건 충족시 on을 할당
            this.powerStatus = 'on'
            //on일때 유휴를 표시하는 값 할당
            this.status = 'idle'
            //on일때만 동작
            if(this.powerStatus === 'on'){
            //시간 설정(각status에 땨른 시간설정)
              setTimeout(()=>{this.status = 'sensingDistance',
              setTimeout(()=> {this.status = 'reportingData',
              setTimeout(() =>{this.status = 'idle'},1000)},
              500)},this.reportingInterval) 
            } 
        }
        //off를 발생시키기위한 조건문
        else if(swIwtCh==='off'){
            return this.powerStatus = swIwtCh
        }
        //powerStatus값이 중복 일때 예외처리
        else{
            throw new Error();
        }
       
    
    }
 
}

     
   
    


class IotServer  {
    constructor(){
        //server에 sensor를 넣주기윈한 array
        this.sensor= []
    }
    //sensor을 넣어 주기 위한 메소드
    start(sensor){
        this.sensor = sensor
    }
    //server에 객체 생성 메소드
    publish(serVers){
       //넣어준 sensor를 접근하기위해 선언한 변수
        let [server] = this.sensor
        //serVers에actionId이'CHANGE_REPORTING_INTERVAL'and server.powerStatus가'on'일때만 동작
        if (serVers.actionId === 'CHANGE_REPORTING_INTERVAL' && server.powerStatus === 'on') server.reportingInterval = serVers.payload;

    }
}

module.exports = {
    Sensor,
    IotServer,
};
