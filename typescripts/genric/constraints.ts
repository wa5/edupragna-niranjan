function merge<U extends object ,V extends object>(a:U,b:V){
    return {
        ...a,
        ...b
    }

}
var a=merge({H:09},{j:'hgghgh'})