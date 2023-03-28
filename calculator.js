function addToExpression(value) 
{
    document.getElementById("expression").value += value;
}
function clearExpression() 
{
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";
}

function calculate() 
{
    try 
    {
        document.getElementById("result").value = eval(document.getElementById("expression").value);    
    } catch (e) 
    {
        document.getElementById("result").value = "Error";
    }
}