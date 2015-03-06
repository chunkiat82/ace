#ACE (Accounts Create Engine)

## Use cases

Help PayPal partners create massive accounts for their merchants in a simpler and more productive way.

## Requirements
* Able to help client create `business` type account
* Supress email reminder when account is created
* If fail to create due to invalid provided information, output detailed helpful error log
* Mark the account created as a partner's client
* TODO

## Sample `AA` request

## To run App
```
npm install
bower install
npm start
```

```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:aa="http://svcs.paypal.com/types/aa">
   <soapenv:Header/>
   <soapenv:Body>
      <aa:CreateAccountRequest>      
         <requestEnvelope>
            <detailLevel>ReturnAll</detailLevel>
            <errorLanguage>en_US</errorLanguage>
         </requestEnvelope>
         <accountType>BUSINESS</accountType>
         <name>
            <firstName>Harry</firstName>
            <lastName>Potter</lastName>
         </name>
         <dateOfBirth>1982-10-12</dateOfBirth>
         <address>
            <line1>12 New street</line1>            
            <city>Austin</city>
            <state>TX</state>
            <postalCode>78701</postalCode>
            <countryCode>US</countryCode>
         </address>        
         <contactPhoneNumber>5089674024</contactPhoneNumber>
         <homePhoneNumber>5089674024</homePhoneNumber>
         <mobilePhoneNumber>5088286373</mobilePhoneNumber>
         <currencyCode>USD</currencyCode>
         <citizenshipCountryCode>US</citizenshipCountryCode>
         <preferredLanguageCode>en_US</preferredLanguageCode>
        <emailAddress>kalnatarggajan-APC11@paypal.com</emailAddress>
         <registrationType>WEB</registrationType>
         <createAccountWebOptions>
            <showAddCreditCard>true</showAddCreditCard>
            <returnUrlDescription>my return url</returnUrlDescription>
            <useMiniBrowser>false</useMiniBrowser>
         </createAccountWebOptions>
          <businessInfo>
            <businessName>Paypal</businessName>
            <businessAddress> 
               <line1>12 street</line1> 
	         <city>Austin</city>
	         <state>TX</state>
	         <postalCode>78701</postalCode>
	         <countryCode>US</countryCode>   
              <countryCode>US</countryCode>
            </businessAddress>
            <workPhone>7777777777</workPhone>
            <category>1004</category>
            <subCategory>2027</subCategory>
            <businessType>PARTNERSHIP</businessType>            
            <dateOfEstablishment>2009-03-04</dateOfEstablishment>
            <customerServicePhone>8888888888</customerServicePhone>
            <customerServiceEmail>CustomerService@paypal.com</customerServiceEmail>
            <averagePrice>500</averagePrice>
            <averageMonthlyVolume>10000</averageMonthlyVolume> 
            <webSite>http://www.paypal.com/</webSite>
            <percentageRevenueFromOnline>90</percentageRevenueFromOnline>
            <salesVenue>WEB</salesVenue>            
        </businessInfo>
      </aa:CreateAccountRequest>
   </soapenv:Body>
</soapenv:Envelope>

```
