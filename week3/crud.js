 var names=['vyshu','supriya','mani'];
Array.prototype.create=function(n)
{
    this.push(n);
    console.log(this);
};
names.create("ravali");


Array.prototype.read=function()
{
this.forEach(function(name,index){
    console.log(name,index);
})
};
names.read();

Array.prototype.update=function(name,updatedName)
{
    var updatedNames=[];
    for(var i=0;i<this.length;i++)
    {
        if(this[i]===name)
        {
            updatedNames[i]=updatedName;
            console.log("position "+i+" is updated to "+updatedName);
        }
        else{
            updatedNames.push(this[i]);
        }
    }
    return updatedNames;
};

console.log(names.update("vyshu","vyshnavi"));


Array.prototype.remove=function(name)
{
    var updatedNames=[];
    for(var i=0;i<this.length;i++)
    {
        if(this[i]===name)
        continue;
        else
        updatedNames.push(this[i]);
    }
    return updatedNames;
};
console.log(names.remove("ravali"));
/*OUTPUT:[ 'vyshu', 'supriya', 'mani', 'ravali' ]
vyshu 0
supriya 1
mani 2
ravali 3
position 0 is updated to vyshnavi
[ 'vyshnavi', 'supriya', 'mani', 'ravali' ]
[ 'vyshu', 'supriya', 'mani' ]*/
