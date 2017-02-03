if (typeof HealthCare === 'undefined')
    HealthCare = {};

HealthCare.controller = {
    httpReq: null,
    createAjaxObject:function()
    {
        try
        {
            this.httpReq = new XMLHttpRequest();
        }
        catch(e)
        {
            try
            {
                this.httpReq = new ActiveXObject("Msxml2.XMLHTTP3.0");
                console.log("Browser version IE 7 or below");
            }
            catch(e)
            {
                console.log('Ajax object cannot be created');
                return false;
            }

        }
        this.httpReq.open('GET','https://jsonplaceholder.typicode.com/posts',true);
        this.httpReq.send(null);
        this.httpReq.onreadystatechange = CallBackResponse;
    }

};


function CallBackResponse()
{
    if ((HealthCare.controller.httpReq.readyState == 4) &&
        (HealthCare.controller.httpReq.status == 200))
    {
        HealthCare.model =HealthCare.controller.httpReq.responseText;
        console.log('Response Received');
    }
}


