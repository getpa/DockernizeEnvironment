function validateSentence(sentence) {
    // 口語ではなく文語を使う

    var terms = [
        // http://www.ise.chuo-u.ac.jp/ISE/outline/Gmajor/nihongo/28.html
        {
            'expected':'過度に',
            'pattern':['あまりに']
        },
        {
            'expected':'一度に／一括して／まとめて',
            'pattern':['いっぺんに']
        },
        {
            'expected':'また，さらに',
            'pattern':['あと'],
            'tokenCheck':['名詞','副詞可能','あと']
        },
        {
            'expected':'行う/する',
            'pattern':['やる'],
            'tokenCheck':['動詞','自立','やる']
        },
        {
            'expected':'する',
            'pattern':['してやる'],
            'tokenCheck':['動詞','自立','してやる']
        },
        // 別途検知方法を考える
        // してあげる、してない
        {
            'expected':'が',
            'pattern':['けど'],
            'tokenCheck':['助詞','接続助詞','けど']
        },
        {
            'expected':'であった',
            'pattern':['だった']
        },
        {
            'expected':'であるとき／であったらならば／なら',
            'pattern':['だったら']
        },
        // 別途検知方法を考える
        // 文頭のシリーズ しようがない
        {
            'expected':'のような',
            'pattern':['みたいな']
        },
        {
            'expected':'は／や',
            'pattern':['とか'],
            'tokenCheck':['助詞','並立助詞','とか']
        },
        // 別途検知方法を考える
        // したり
        {
            'expected':'ではなく',
            'pattern':['じゃなくて']
        },
        {
            'expected':'適切な言葉',
            'pattern':['すごく'],
            'tokenCheck':['形容詞','自立','すごい']
        },
        // 別途検知方法を考える
        // したり
        {
            'expected':'比較的／やや／かなり／たいへん／きわめて',
            'pattern':['超'],
            'tokenCheck':['接頭詞','名詞接続','超']
        },
        {
            'expected':'真に／絶対的に／圧倒的に',
            'pattern':['まじで']
        },
        {
            'expected':'直接的に／直接',
            'pattern':['まともに']
        },
        {
            'expected':'直接的に／直接',
            'pattern':['もろに']
        },
        {
            'expected':'単純／易しい／容易',
            'pattern':['簡単']
        },
        {
            'expected':'単純／易しい／容易',
            'pattern':['楽'],
            'tokenCheck':['名詞','形容動詞語幹','楽']
        },
        {
            'expected':'複雑／難しい／困難',
            'pattern':['面倒']
        },
        {
            'expected':'複雑／難しい／困難',
            'pattern':['難儀']
        },
        {
            'expected':'複雑／難しい／困難',
            'pattern':['厄介']
        },
        // http://www.ipentec.com/document/document.aspx?page=write-thesis-tips
        /*
        {
            'expected':'別の表現',
            'pattern':['という'],
            'tokenCheck':['助詞','格助詞','という']
        },
        */
        {
            'expected':'別の表現',
            'pattern':['すると']
        },
        // http://isabelle.cc.kyushu-u.ac.jp/~amano/how_to_write/japanese.html
        {
            'expected':'する必要がある',
            'pattern':['ないといけない']
        },
        {
            'expected':'したがって/このため/そのため',
            'pattern':['だから']
        },
        {
            'expected':'したがって/このため/そのため',
            'pattern':['それで']
        },
        // http://www.ise.chuo-u.ac.jp/ISE/outline/Gmajor/nihongo/50.html
        {
            'expected':'済みません／申し訳ございません',
            'pattern':['すいません']
        },
        {
            'expected':'他の適切な表現',
            'pattern':['ちなみに']
        },
        {
            'expected':'ています',
            'pattern':['てます']
        },
        {
            'expected':'ていません',
            'pattern':['てません']
        },
        {
            'expected':'もの',
            'pattern':['やつ'],
            'tokenCheck':['名詞','代名詞','やつ']
        },
        {
            'expected':'削除／他の適切な表現',
            'pattern':['しまう'],
            'tokenCheck':['動詞','非自立','しまう']
        }
    ];

    var morphologicalAnalysis = function(sentence){
        for (var k = 0; k < sentence.tokens.length; k++) {
            if ( sentence.tokens[k].tags[0] === terms[i]['tokenCheck'][0] &&
                 sentence.tokens[k].tags[1] === terms[i]['tokenCheck'][1] &&
                 sentence.tokens[k].surface === terms[i]['tokenCheck'][2] ){
                addError('「' + terms[i]['pattern'][j] +'」は口語です。「' + terms[i]['expected'] + '」に修正してください' , sentence);
            }
        }
    }

    for ( var i = 0; i < terms.length; i++ ) {
        for ( var j = 0; j < terms[i]['pattern'].length; j++ ) {
            var regex = new RegExp( terms[i]['pattern'][j] );
            if ( 'tokenCheck' in terms[i] ) {
                morphologicalAnalysis(sentence);
            } else {
                if ( sentence.content.match(regex) ) {
                  addError('「' + terms[i]['pattern'][j] +'」は口語です。「' + terms[i]['expected'] + '」に修正してください。' , sentence);
                }
            }
        }
    }
}
