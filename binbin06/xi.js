
 var input = document.getElementById("input"),
        btnQuery = document.getElementById("query"),
        inQuery = document.getElementById("query-str"),
        //cloner = document.getElementById("cloner"),
        counts = document.getElementById("counts"),
        matcher = document.getElementById("matcher");

   var regex = /[,，\s、]+/;
  btnQuery.onclick = function () {
        //console.log("当前的 input.value: " + input.value);
        var queryStr = inQuery.value; //读取查询词
        if (validQuery(queryStr)) {
          highlight(queryStr);
          var tokens = input.value.split(regex);
          listMatched(tokens, queryStr);
        } else {
          alert("查询词不能含有'回车，逗号（全角半角），顿号，空格（全角半角、Tab等）'");
        }
      };
  
  function validQuery(queryStr) {
        if (!queryStr) return false;
        var pattern = new RegExp(regex);
        //console.log("validQuery的pattern：" + pattern);
        //pattern.test(queryStr) ? console.log("匹配: " + pattern.exec(queryStr)) : console.log("合法");
        return !pattern.test(queryStr);
      } 
     /**
       * 高亮显示查询的词语 
       */
  function highlight(queryStr) {
    //读取文本
    var parseText = input.value,
      //替换文本
    pattern = new RegExp(queryStr, "g"),
    replace = "$&";
    parseText = parseText.replace(pattern, '<span class="highlight">' + replace + '</span>');
    cloner.innerHTML = parseText;
    //console.log(parseText);
  } 
   function listMatched(tokens, query) {
        var count = 0;
        matched = "";
        for (var i in tokens) {
          if (tokens[i].match(query)) {
            matched += tokens[i] + "\n";
            count++;
          }
        }
        matcher.innerText = matched;
        counts.innerText = count;
      }        
           
     
  
     


    