import * as React from 'react';

const Menu: React.FC = () => {

    return (
    <div className='menu-container'>
        <div className='white-menu'>
            <img src='./././img/menu1.webp'></img>
            <img src='./././img/menu2.webp' loading='lazy'></img>
        </div>

        <div className='cocktails-parallax'>
            <div className='cocktails'>
                <h1>Cocktails</h1>

                <div className='cocktails-left'>
                    <div className='cocktails-left-item'>
                        <h4>Aloha Punch</h4>
                        <p>light rum, pineapple rum and coconut rum with pineapple & cranberry juice topped with fresh coconut flakes and a fresh rum soaked pineapple</p>
                    </div>
                    <div className='cocktails-left-item'>
                        <h4>BAJA Berry Blaster</h4>
                        <p>Smirnoff Blueberry vodka with lemonade and splash of club soda, blueberry syrup and booze soaked blueberries</p>
                    </div>
                    <div className='cocktails-left-item'>
                        <h4>Quarantini</h4>
                        <p>Malibu rum, blue curacao and pineapple juice topped with fresh rum soaked pineapples</p>
                    </div>               
                </div>

                <div className='cocktails-right'>
                    <div className='cocktails-right-item'>
                        <h4>Maui Mai Tai</h4>
                        <p>Bacardi gold rum, lime juice, orgeat, orange curacao, simple syrup, served with fresh orange & cherry</p>
                    </div>
                    <div className='cocktails-right-item'>
                        <h4>Hula Punch</h4>
                        <p>Captain Morgan spiced and pineapple rums, peach schnapps, cranberry and pineapple juices garnished with fresh boozy pineapple chunks and cherry</p>
                    </div>
                    <div className='cocktails-right-item'>
                        <h3>Order your cocktail in one of our take home tiki mugs!</h3>
                    </div>
                </div>
            </div>
        </div>

        <div className='beverages'>
            <h1>Beer</h1>
            <h1>Wine</h1>
            <span>*List subject to change*</span>

            <div className='beverages-left'>
                <h4>Domestics</h4>
                <p>Bud / Bud Light / Bud Light Lime</p>
                <p>Coors Light</p>
                <p>Miller Lite / Miller High Life</p>
                <p>Michelob Ultra</p>
                <p>Pabst Blue Ribbon</p>
                <p>Busch Light</p>
                <p>Natty Light</p>
                <p>Yuengling</p>
                <p>Blue Moon Light Sky</p>

                <h4>Imports</h4>
                <p>Corona / Corona Light / Corona Premier</p>
                <p>Heineken</p>
                <p>Stella Artois</p>
                <p>Guinness</p>
                <p>Smithwick's</p>

                <h4>Non-Alcoholic / Gluten-Free</h4>
                <p>Heineken 0.0 (non-alcoholic)</p>
                <p>Redbridge Amber (gluten-free)</p>
            </div>

            <div className='beverages-middle'>
                <h4>American Craft Beers</h4>
                <p>3 Daughter's Beach Blonde Ale</p>
                <p>3 Daughter's Rod Bender Red Ale</p>
                <p>Cycle Brewing Cream & Sugar, Please Porter</p>
                <p>Kona Big Wave Golden Ale</p>
                <p>Kona Longboard Lager</p>
                <p>Sierra Nevada Pale Ale</p>
                <p>Cigar City Jai Alai IPA</p>
                <p>SweetWater 420 Strain G13 IPA</p>
                <p>New Belgium Voodoo Ranger IPA</p>
                <p>Elysian Space Dust IPA</p>

                <h4>Ciders / Other</h4>
                <p>3 Daughter's Key Lime Cider</p>
                <p>Angry Orchard Cider</p>
                <p>Smirnoff Ice</p>
                <p>Bud Lite Seltzer</p>
                <p>White Claw</p>
                <p>High Noon</p>
                <p>Wicked Weed Burst Watermelon Dragonfruit Sour</p>
                <p>Cutwater Tiki Rum Mai Tai (12.5%) (GF)</p>
            </div>

            <div className='beverages-right'>
                <h4>House Wines</h4>
                <p>White Zinfandel</p>
                <p>Pinot Grigio | Chardonnay</p>
                <p>Merlot | Cabernet | Pinot Noir</p>

                <h4>White Wine</h4>
                <p>Kendall Jackson Chardonnay</p>
                <p>Toasted Head Chardonnay</p>
                <p>Ruffino Pinot Grigio</p>
                <p>Kim Crawford Sauvignon Blanc</p>
                <p>Oyster Bay Sauvignon Blanc</p>

                <h4>Red Wine</h4>
                <p>Murphy-Goode Cabernet Sauvignon</p>
                <p>Sea Glass Pinot Noir</p>
                <p>Kenwood Merlot</p>
                <p>Cardos Malbec</p>

                <h4>Sparkling</h4>
                <p>J. Roget Brut Champagne Split</p>
                <p>Moet Chandon Champagne Split</p>
            </div>
        </div>

        <div className='menu-happy-hour'>
            <div className='happy-hour-left'>
                <img id='hh-img' src='./././img/pouring.gif' loading='lazy'/>
                <p id='hh-p'>Happy Hour</p>
            </div>
            <div className='happy-hour-right'>
                <h1>All Day Every Day</h1>
                <p>$13 Domestic Beer Buckets</p>
                <p>$4 Fireball Shots</p>
                <p>$5 House Wines</p>
                <p>$5 Captain Morgan, Bacardi & Smirnoff</p>
            </div>
        </div>
    </div>
    )
}

export default Menu;