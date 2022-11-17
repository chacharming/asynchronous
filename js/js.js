const portfolioDB = [
    {
        tittleImg : "./portfolio/big/project_5.jpg",
        thumbImg : ['portfolio/thumb/ad/project_1.jpg','./portfolio/thumb/ad/project_2.jpg','./portfolio/thumb/ad/project_3.jpg'],
        descriptionH2 : "나의 멋들어진 포트폴리오",
        description : "이렇게 만들었으니 나를 고용해라 주저리주저리 떠들기 내가 이래서요 저래서요 어쩌구저쩌구 욜라욜라 샬랄라 어쩌구 똥똥똥",
        pLinkinfo : ['사이트주소','https://github.com/chacharming','피그마주소']
    }
]
$(function(){
    $('.active a').attr('style','color: #8a9db6')

    $('.titleImg img').attr('src',portfolioDB[0].tittleImg)

    // for( let i in portfolioDB[0].thumbImg ){
    //     $(`.thumbImg li:eq(${i}) img`).attr('src',portfolioDB[0].thumbImg)
    // } 제이쿼리의 장점을 이용하지는 않았지만 리액트와 닮음

    // 아래부터는 제이쿼리의 특권
    // 앞은 인덱스 뒤가 값 map과 순서가 바뀐 모습
    // $(`.thumbImg img`).each((a, b) => {
    //     console.log(a, b);
    // })
    $(`.thumbImg img`).each((index, item) => {
        $(item).attr('src',portfolioDB[0].thumbImg[index] )
    })
    $('.description h2').html(portfolioDB[0].descriptionH2)
    $('.description p').html(portfolioDB[0].description)
    $(`.p_linkinfo a`).each((index, item) => {
        $(item).attr('href',portfolioDB[0].pLinkinfo[index] )
    })
})

    // 대표이미지 ->String -> titleImg : '/portfolio/big/1.jpg'
    // 썸네일이미지들 -> Array -> thumbImg : ['./portfolio/thumb/ad/1.jpg','./portfolio/thumb/ad/2.jpg','./portfolio/thumb/ad/3.jpg']
    // 제목 -> String -> descriptionH2 : '수능광고 전단지'
    // 구체적인 설명 -> String -> description : '이렇게 만들었으니 나를 고용해라'
    // 링크들 -> object -> p linkinfo : ['사이트주소','깃주소','피그마주소']