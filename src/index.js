class Site{
    //속성을 정의 해준다
    constructor(){
        this.boards = [];
        
    }
    //생성메서드 호출시 board는 변수를 사용
    addBoard(board){
        //board.find하여 동일한 name 있는 지 확인한다. => 있으면 error
        if(this.boards.find((name)=> name.name === board.name)){
            throw new Error();
        }
        //고유값(Stie안에 존재하는 지 판별 하기 위한 값)
        board.my = true
        return this.boards.push(board)
    }
    //조회 메서드 변수name을 사용
    findBoardByName(name){
        //boards 길이를 구한다 
        for(let i=0; i<this.boards.length; i++){
            //boards에 일치하는 name있는 지 확인한다.
            if(this.boards[i].name === name){
                //일치하는 값을 반환
                return this.boards[i]
            }
        }
    }
}


class Board{
    //속성 정의
    constructor(name){
        this.name = name;
        //name에 null과 '' 있는 지 확인
        if(this.name === '' || this.name === null){
            throw new Error('공백')
        }
        this.article = [];
        //판별을 위한 고유값
        this.my = false
    }

    //생성 메서드 변수 articles
    publish(articles){
        //Site안에 board생성한 고유값이 있는 지 확인 
       if(!this.my){
        throw new Error('중복');  
           
        }
            //null 과 '' 검사
        if(articles.subject === '' || articles.subject === null ||
         articles.content === '' || articles.content === null ||
         articles.author === '' || articles.author === null ){
               throw new Error('공백');  
         }
        articles.mYar = true
        
         //아이디값 생성 = name을 받아서 Math.rendom을 무작위로 값을 생성
         articles.id = `${this.name}-${Math.random()}`
         //article에 변수 articles를 넣어준다 
         return this.article.push(articles)
    }
        
        
    //조회 메서드
    getAllArticles(){
        return this.article
    }
}

class Article {
    constructor({subject,content,author}){
        //구조 분해 할당으로 속성을 받는다.
        {this.subject = subject
         this.content =content
         this.author = author
        }
         //작성일자 생성 = ISO 기준으로생성
        this.createdDate = new Date().toISOString();
        
        this.mYar = false
        this.comments = []
    }
    reply(comment){
        //Board안에 존재하는 지 판별
        if(!this.mYar){
            throw new Error('존재하지 않습니다')
        }
        //조건 통과시 comment추가
        return this.comments.push(comment)
        
    }
    //조회 메서드
    getAllComments(){
        return this.comments
    }
    


}


class Comment{
    constructor({content,author}){
        //구조분해 할당으로 속성을 받는다.
        {
            this.content = content
            this.author = author
        }
        //공백과 null이 존재하는 지 검사
        if(this.content === ''|| this.content === null||
            this.author === ''|| this.author === null){
                throw new Error('오류')
            }
        //일자 생성
        this.createdDate = new Date().toISOString();
    }

}
module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
