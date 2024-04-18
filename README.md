## Welsh language toggle

![A gif showing the language on a GOV.UK style page changing between English and Welsh. A language toggle is in the top right of the page. This swaps the content between English and Welsh.](/docs/Welsh_language_toggle.gif)

## Switching Between English and Welsh Languages

- The language toggle lets users switch between English and Welsh languages. So if a user selects English, the content displays in English. And if they select Cymraeg, the language displays in Welsh.
- In versions of the toggle available elsewhere, if the English version of a page is displayed and the user clicked Cymraeg on the toggle, the user would be directed to a duplicate of the English page, now showing in Welsh. Therefore two separate versions of the page are needed. Meaning that if there are any design changes, it would need to be made on both pages. If there is a long and complex journey, this could mean alot of extra work to maintain two different journeys.
- In the feature detailed on this page, the content for both languages can be contained within the same page. This makes it easier for the person building the prototype because they only need to make changes to the design once. 

## How to see the toggle in action

- Go to the index page of this prototype.

## How to install the Welsh language toggle into your prototype

1. Install the [HMRC Frontend](https://design.tax.service.gov.uk/hmrc-design-patterns/install-hmrc-frontend-in-your-prototype/) into your prototype.

2. In your code editor, navigate to the page which you want the toggle on. 
 
In the example below, I want the toggle to display on the page called toggle.html

![screenshot of a code editor showing the toggle file](/docs/toggle.png)

3. Within this file, before the ```{% block content %}```, copy and paste the following code:

```
{% block beforeContent %}
    {{
        hmrcLanguageSelect({
            language: 'cy' if data['languagePreference'] === 'cy' else 'en',
            en: { href: '?languagePreference=en' },
            cy: { href: '?languagePreference=cy' }
        })
    }}
{% endblock %}
```

like this:

![screenshot of a code editor showing the copied code](/docs/content.png)

4. For any content which you want users to be able to switch between English and Welsh, it needs to be contained within an if statement. Here is an example:

![screenshot of a code editor showing the if statement code](/docs/if.png)

5. Therefore, copy the following code anywhere you need the content to be able to switch between the two languages. 

The text within the first set of p brackets should be in the first language you wish to display on the page. In this case, English. The text within the second set of p brackets should be in the second language you wish to display on the same page. In this case, Welsh. 

When the toggle is selected between the Welsh and English, the content displayed should switch between Welsh and English content.

```
   {% if data['languagePreference'] != "cy" %}
            
                <div>
                        <p>English content to go here.</p>
                </div>  
    
            {% else %}
                
                <div>
                        <p>Welsh content to go here.</p>
                </div>
            
            {% endif %}

```

6. Remember, you will need to repeat this on every page which you want the content to switch between languages.
