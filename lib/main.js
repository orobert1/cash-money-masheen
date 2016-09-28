const domNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg) {
	  let elements = [];
	  if (typeof arg === "string") {
	      if(arg[0] === "."){
	        elements = document.getElementsByClassName( arg.slice( 1, arg.length ));
	      }else if( arg[0] === '#') {
	        let id = arg.slice( 1,arg.length );
	        if( document.getElementById( id ))
	        elements = [document.getElementById( id )];
	      }else{
	        elements = document.querySelectorAll( arg );
	      }
	      return new domNodeCollection( Array.from( elements ));

	  } else if ( arg instanceof HTMLElement ) {
	      return new domNodeCollection([arg]);
	  }
	};

	$l.extend = function( base,...params ){
	  for ( var i = 0; i < params.length; i++ ) {
	    let other = params[i];
	    for ( var j = 0; j < Object.keys( other ).length; j++ ) {
	      let key = Object.keys( other )[j];
	      if( Object.keys( base ).indexOf( key ) === -1){
	        base[key] = other[key];
	      }
	    }
	  }

	  return base
	}

	$l.bjax = function( options ){
		let defaults = {url: "", data: "", dataType:"JSONP",
		sucess:function(){}, erorrs:function(){},
		async:false,type:'GET'};
		this.extend( options,defaults );
		const xhr = new XMLHttpRequest();
		xhr.open( options["type"],options["url"]);
		xhr.onload = function( options ){
			console.log( xhr.status );
			console.log( xhr.responseType );
			console.log( xhr.response );
			options["success"]();
		}
		
		xhr.send( options );
	}






	// a/aslkdjhlkajsdlkjasd
