$(document).ready(function(){

});

//Wiki data
function getWikiData(query){

		$(".results").empty();

	var url = "https://en.wikipedia.org/w/api.php" //action=query&titles=Sachin&prop=revisions&rvprop=content&format=json;
	var queryData = {"action":"query",
									 "prop":"pageimages|extracts",
									 "generator":"search",
									 "format":"json",
									 "pilimit":"max",
									 "pithumbsize":"150",
									 "gsrnamespace":0,
									 "gsrlimit":50,
									 "exintro":"true",
									 "explaintext":"true",
									 "exsentences":2,
									 "exlimit":"max",
									 "gsrsearch":query}
	$.ajax(url,{
		data: queryData,
		dataType:'jsonp',
		type:'GET',
		headers:{'Api-User-Agent':'WikiSearch 1.0  (email: majhi.anupam@gmail.com , for: FreeCodeCamp)'}
	})
	.done(function(data){
		console.log(data);
		result = data.query.pages
		for(var key in result){
			showResult(result[key]);
		}
	})
	.always(function(data){
		/*console.log(data);*/
	})
}

function showResult(result){

	resultImage = ""
	if(result.thumbnail){
		resultImage = "<div class='resultImage'><img src='"+result.thumbnail.source+"'></div>"
	}

	resultExtract = "<div class='resultExtract'>"+result.extract+"</div>"

	resultHead = "<div class='resultHead'>"+result.title+"</div>"

	resultDiv = "\
<a class='resultLink' target='_blank' href='http://en.wikipedia.org/?curid="+result.pageid+"'>\
	<div class='resultRow'>\
			"+resultImage+"\
			"+resultHead+"\
			"+resultExtract+"\
	</div></a>\
	"
	$(".results").append(resultDiv);
}

https://en.wikipedia.org/wiki/Special:Random


$("#searchForm").submit(function(event){
	console.log("Submitted");
	event.preventDefault();
	getWikiData($("#searchInput").val());
})
