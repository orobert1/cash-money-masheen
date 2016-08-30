function domNodeCollection(HTMElz){
  this.HTMElz = HTMElz;
}

domNodeCollection.prototype.html = function(string) {
  if ( string ) {
    this.HTMElz.forEach(function( el ) {
      el.innerHTML = string;
    });
  } else {
    return this.HTMElz[0].innerHTML;
  }
};

domNodeCollection.prototype.empty = function () {
  this.html("");
};


domNodeCollection.prototype.append = function( arg ) {
  let content;
  if(typeof arg === 'object' && arg.HTMElz === undefined){
    this.append($l( arg ));
  }else if ( typeof arg === "string" ) {
    this.HTMElz.forEach(( el ) => { el.innerHTML += arg });
  }else if(arg.HTMElz !== undefined){
    arg.HTMElz.forEach(( el )=>{
      this.HTMElz.forEach(( HTMEl )=>{
        let clone = el.cloneNode();
        clone.innerHTML = el.innerHTML;
        HTMEl.appendChild( clone );

      })
    });
  }
};

domNodeCollection.prototype.attr = function(attr, val) {
  if( !val ){
    return attr;
  }else{
    this.HTMElz.forEach( function ( el ) {
      el.setAttribute( attr, val );
    });
  }
};

domNodeCollection.prototype.addClass = function( className ){
  this.HTMElz.forEach(function ( el ) {
    el.className = ( el.className + " " + className );
  });
};

domNodeCollection.prototype.removeClass = function( className ) {
  this.HTMElz.forEach(function ( el ) {
    let start = el.className.indexOf( className );
    let end = start + className.length;
    let endend = el.className.length;
    el.className = el.className.slice( 0, start ) + el.className.slice( end, endend );
  });
};

domNodeCollection.prototype.children = function( tag ){
  let result = [];
  for( var i = 0; i < this.HTMElz.length; i++ ) {
    let el = this.HTMElz[i]
    for( var j = 0; j < el.childNodes.length; j++ ) {
      let child = el.childNodes[j];
      if( $l( child )!== undefined ){
        if( child.className === tag || child.id === tag || child.tagName.toLowerCase() === tag ){
          result.push( child );
        }
        result = result.concat( $l( child ).children( tag ).HTMElz );
      }
    }
  }
  return new domNodeCollection( result );
};

domNodeCollection.prototype.parent = function(){
  let par = [];
  this.HTMElz.forEach( function( el ) {
    if ( par.indexOf( el.parentElement ) === -1 ) {
      par.push( el.parentElement );
    }
  });
  return new domNodeCollection( par );
};

domNodeCollection.prototype.find = function( tag ) {
  var result = [];
  var children = this.children( tag );
  if ( children.HTMElz.length === 0 ){
    return;
  }
  result = result.concat( children.HTMElz );
  let foundChildren = children.find( tag );
  if( foundChildren !== undefined ){
    result = result.concat( foundChildren );
  }
  return new domNodeCollection( result );
};

domNodeCollection.prototype.remove = function(){
  this.HTMElz.forEach( function( child ){
    child.parentElement.removeChild( child );
  });
};

domNodeCollection.prototype.click = function( fnc ){
  for( var i = 0; i < this.HTMElz.length; i++ ) {
    this.HTMElz[i].addEventListener( "click", fnc );
  }
};

domNodeCollection.prototype.on = function( event, fnc ){
  for( var i = 0; i < this.HTMElz.length; i++ ) {
    this.HTMElz[i].addEventListener( event, fnc );
  }
}



module.exports = domNodeCollection;
