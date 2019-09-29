function FindProxyForURL(url, host)
        {
          
            if (
                shExpMatch(url,"*twitter*") ||
                shExpMatch(url,"*facebook*") ||
                shExpMatch(url,"*blogspot*") ||
                shExpMatch(url,"*youtube*") ||
                shExpMatch(url,"*ted*") ||
                shExpMatch(url,"*google*")||
                shExpMatch(url,"*goodnight*")||
                shExpMatch(url,"*tinder*") || 
                shExpMatch(url,"*skout*") 
                    
            )
            {
                return "PROXY 192.168.1.102:8118; PROXY 192.168.1.103:8118; DIRECT";
            }    
    
    
            if (shExpMatch(url,"*.google.com/*")) {return "PROXY 192.168.1.102:8118; DIRECT";}
            if (shExpMatch(url, "*.google.com:*/*")) {return "PROXY 192.168.1.102:8118; DIRECT";}
    
    
            return "DIRECT";
        }
