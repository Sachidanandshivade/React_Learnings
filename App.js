import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./src/logo.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="log-container">
           <img className="logo" src="src/logo.jpg" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
         </div>
    );
};

const resList =  [
            {
                "type": "restaurant",
                "info": {
                    "resId": 21465940,
                    "name": "Good Flippin' Burgers",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/21280126\/d675f1ca85a593e648b490753fe0555b_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/21280126\/d675f1ca85a593e648b490753fe0555b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/21465940\/d31b732a2e2a66be6d1050b7e2b1765e_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "2,441",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.1",
                                "reviewCount": "1,218",
                                "reviewTextSmall": "1,218 Reviews",
                                "subtext": "1,218 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.1",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.4",
                                "reviewCount": "1,223",
                                "reviewTextSmall": "1,223 Reviews",
                                "subtext": "1,223 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.4",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9900 for two"
                    },
                    "cfo": {
                        "text": "\u20b9400 for one"
                    },
                    "locality": {
                        "name": "Church Street, Bangalore",
                        "address": "1\/A, Church Street, Bangalore",
                        "localityUrl": "bangalore\/church-street-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 1 hour 19 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/wraps\/",
                            "name": "Wraps"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                            "name": "Shake"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/american\/",
                            "name": "American"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9900 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/good-flippin-burgers-church-street-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.4 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18756850\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21465940\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"FsQedtvTi\/gg2ZI5m9EUqdgdf5Wk0n1GNnfR4XOb+CVpUZgvw2SGpcPg8APrlzkTeS24ziWL6qFufQez0PEHY6cLMj1U7jBuhhYzlxst6uywHxC1sJirUrXLzibru32GHxUA\/6O6HQb4k3rmuCbpuDFA\/BLIimQG4Dgoom1iyF+f0e6eTu0wcVPDUK3XBZfuIqXgy1Qa80+cuUoSzNf0TuqMrX7fEf0Z112JhdwyWwlUwtHKWnZzLfQUddHdMaQhJR5eHXj9lNYn0dX0NzwDfvsiwfCSlQoNBTGvwiZym6\/KLZiTqy7cFN1q2FkWHgBH0sXLvI0nSr8\/oTWnrqNL7YTMofOWYh7UBweritoIfRUcMbJH8k8j+Xtjc9tKR1qlD\/hC1B4D4xvkOOeiFNueghsTwqibevY2lA5V5UzS7U31v5ZsoLH8QJ2IebQrxyQCeCz6kgSmRIp9DYN0Cvfa4QcJXBd3StiC0fzXvdhFsY7Ht5gRAINcqthJN7sWv\/d3JQq502Eeptpd+Gjy4Aw0v2U9ufuXXJbuKAonZuuQDZ+SmOhK6SmX31RxAIaK3oOqVfvWtuw2lLhsxPgYBsXEz1cBYW3ikFMyAdn9Ecw8\/VvDb7NDJilTHkP6zrriusH\/ZXTA3COuHJXbXIe88Boy8nIA401c9skMctx\/9Y9RN8uyZF1unfJegQkaVWfs3xCuCBhtjF+iGcGgzRIQ7K9IyAmB9cr7x2anSr9nFO5R2xTlJRDyOf\/i6ZrhsfHg8gxd3nYY03e3AaXReVrj4rlCqgna4j64Nsj0cDI+hZAsFLMoom4fIYP2DJn\/en6lg0PqjU7IigV3bX9TL2TbvV5CYZVdyoruRX6MGKj8mggBB1\/zlDcgkMhfTUra0cINt6dSl9f8cjoCaQ==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"21465940\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":10}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21959252,
                    "name": "Cahoots",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/21959252\/fba6e2e215dad9f7c1650d19a96fd6ef_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/21959252\/fba6e2e215dad9f7c1650d19a96fd6ef_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/21959252\/29cea2fef0a43211ce3f7ba0986eb723_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.6",
                        "rating_text": "3.6",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "1,879",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "1,870",
                                "reviewTextSmall": "1,870 Reviews",
                                "subtext": "1,870 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "2.6",
                                "reviewCount": "9",
                                "reviewTextSmall": "9 Reviews",
                                "subtext": "9 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "2.6",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "yellow",
                                    "tint": "400"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9800 for one"
                    },
                    "locality": {
                        "name": "Brigade Road, Bangalore",
                        "address": "48\/2, 48\/3, Brigade Garden, Shanthinagara, Brigade Road, Bangalore",
                        "localityUrl": "bangalore\/brigade-road-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                            "name": "South Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/biryani\/",
                            "name": "Biryani"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTNcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/tibetan\/",
                            "name": "Tibetan"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/cahoots-brigade-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.4 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18693564\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21959252\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"DbrIwn+NvbxAoqvXH\/Up82y3p\/TeeRDAoGCN4V+ggBiWXxPKGstlzAkeEb\/Mq29nFUEiszHsS\/qIe7MaZ38XXc+cJksLZemPk+RGtdkYmMzC4vX5xsNYc\/wC8kdrgL6muFB\/RoXoCNVlj3H1ea5E53VkhaXrL9jOLYwSFM\/Kyof3HXLMH2UaHfSCXtXKH2Q99UW1mywHFcuz6D3YmEUc9Ya1H4KuFbnPLbM3GMvUbXJgii0+HvocpBZZx9UdvL1omO+qkmNh0cL\/tV+CTIlI2D\/gEfDx1lXCOigapqYKkvr1tu9JEXYERnOVceai8yPebObFVt1nmCLrIp3PdxX7EeiBDo5GfRj4TsHGqueptHQN+OFUBTsHY0aExopd0peBCmJ7Z8SN6wK+GNiuarvPNWJf705e7FkQQYQE8egB+x\/lRYcPVtQp9hvYEn9rKXkDsWtTwvlmjB8Pv+V0iNYfrdCMMRiOrSi5A7yJYrrNSFk+WbQ\/Qp9CjdY+\/aC6hdjp0AKYZVD10Pk0a1BL2rsyGiHXyQRohQJKc\/EC9+MSQVr0oRK6o2NAA5N\/lITDMj94nNJ830I6\/9N97hsP\/aaC613H3Z3O+u8hzP6vZsow6J71R18aHjqAMvgsdhoSH\/r\/eA5yOKVGpDaYLEsEf0l+raM7Wt3zaLPxPI+oM\/yw+SEMhISgcwyoI3EC7cEVWLESXXUTehv2MoT27zzg8CjA67ivqkGvd9mo1+OTARaMU2bYHGtMHNFuEab2oN3M5ledaUBye7Qm1cI1KgQrcd8dWNrFt+c7FZKAysY6LACehPg2hYSPorv9t8GZ0NMf8EdJbBeTfL\/diSOFI0OaDfb8rPV7nGtyEprt4WbVNMuTG\/zeE2fCPX01nmlB\/nSkE+6Ue4CvgOvV\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"21959252\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":11}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 22665715,
                    "name": "Amoeba Sports Bar",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "330",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "330",
                                "reviewTextSmall": "330 Reviews",
                                "subtext": "330 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9900 for one"
                    },
                    "locality": {
                        "name": "Church Street, Bangalore",
                        "address": "22, Amoeba complex, Church Street, Bangalore",
                        "localityUrl": "bangalore\/church-street-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 1 hour 19 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                            "name": "South Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/american\/",
                            "name": "American"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                            "name": "Burger"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,200 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/amoeba-sports-bar-1-church-street-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.2 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18704356\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22665715\",\"isNewAd\":\"34\",\"ad_position\":\"12\",\"slider_position\":\"12\",\"slider_sequence\":\"12\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"5i5hoMrgNMspmKIL5jZG0a1uf5oer+nnAh9dcSDF9udCY9Y31Ieb9zAnEy8IusBNEsE2ZufbQLCUOHAjR3d5r+6pGR\/yURZl0LHxNyKIWIwDoE04+lLNJRbOPAUyY6rG01sXmSQyaL1UeKGzpaR+TasUgLlCZJHyVCqMIWx\/yMxUkKdnvrkIV0eLySamXfrONfTANa8GmlIAFmpKK0NpPdfTC6RHzqy3ZmTysjjUdzOrpwRMd9TXg9YFd7SO9ZCVde7UE2sencSzwMJil0FbbNO2Se5gkbYp7fDjwF2oOcta+yOO3BiR15zqBFS9szy13ZjpMfhFMAhglpG7W3tgOxWaMwQ8lFXWLNSCCZ+vkBEJBctmndtUoFKwyJ7Yjc8f0QSQ0keBVASRQJZOttdYBBCtixxakNjOd0JlzdT1tXz9pNpS6eW9X+pUxpbZX1DrUb1NKD5xt\/30+7YNNu\/sSoOIfpsmpBVpZAmLftfrQo\/dEFDZ+zcivrIV+3Dug8oR\/ULM3eq4dydMUDJx3yMC3M9+IYdd7srIJRVQFq+zKLenDjXsmQqKhaz3sIgEdhT75K6D8zQYr564YUweztlEDl5bikVa6Lz12lwul9TauwmoqK+BWW20VNILX4endsxYzpKGyqcm7kNn68LqPV8SQLBX3cIq1QKgZtoVvkqa+K7q1p9GEMs2j58eZ3TG552YEQYrPEQHPgaOB\/lJq3RBJokIt38IuwjzII+hHMdEZk4Hhu6MCAaroTZDrs\/X6dL3Gj15Cx+C0bHsIZPphuonU6LAr3Sx7E8BlWHa1oDD\/zBgvp74\/eMcHihjM7IDt8y5M1St3XUygLCHif2XC9C9B\/lLBIr6Cwq4hD0CEKhxMlhzZ1wDJT9LiXY7+OU6nPW5rRPbUAI=\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"22665715\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":12}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19952254,
                    "name": "Flo",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/19952254\/18184094143b73af64b6d892b3a17b9f_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/19952254\/18184094143b73af64b6d892b3a17b9f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/19952254\/a2a04e8e967033d78040fba15a8a426c_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.0",
                        "rating_text": "4.0",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "6,060",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.0",
                                "reviewCount": "6,032",
                                "reviewTextSmall": "6,032 Reviews",
                                "subtext": "6,032 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.0",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "28",
                                "reviewTextSmall": "28 Reviews",
                                "subtext": "28 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,900 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,200 for one"
                    },
                    "locality": {
                        "name": "Church Street, Bangalore",
                        "address": "3, MSR West Park, Ashok Nagar, Church Street, Bangalore",
                        "localityUrl": "bangalore\/church-street-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/finger-food\/",
                            "name": "Finger Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sushi\/",
                            "name": "Sushi"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/thai\/",
                            "name": "Thai"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,900 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 30,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "30% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/flo-church-street-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.4 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18749592\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19952254\",\"isNewAd\":\"34\",\"ad_position\":\"13\",\"slider_position\":\"13\",\"slider_sequence\":\"13\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"ZDtl3EbYKo5uSXgWiFFFzQ+k8\/KL7rr2ZU2kUIDzjW0V1wX8A+lD4NSrCfor\/yR5VG3n0y+NlfItxWZwMBnO0kPCA6Y2IpMytYYA29E9ZQCa3ioWsI0HPNkLQhbdJ9PwRa6OCQZHzbXg3WFtLiFTS8GSqr2gxBx0eWFl+bHdtjD\/EcU4cPeH8wsKT0U9qEWx4LwkTpgI3Oayf0y37MNV5ccmNi+jtKwuuFpHDQmNp7SYpbg4QsYh\/upKLCPJhxX6fbc0M8tab5rShCLyorcLEfyAgMapsZuC0fRfy\/gbJGiuavPH8QEEAL1at5JGvSYnzy9sDLO\/5WKVeQjV9vP5jLNcBJXrkeoVJPklBStas0eQVmoUw5scQpJgl6X0FuKdsoVPyP4UJOPLL33tEyXEvzYILzpc3AnlEJjLP1KXTwwKzxJcbjVShcsBef5IgVid8OzLgvqO5a6WLjP9N7v0yaF1nj5+owFw\/ceB7Tp8LVdXitCX+OAizraA1MczhvRLgnVDSXBotHqM9EOqBrWzpz8afw6AE+DPa+2rbbwaJ3zwvNSAa3VXF+vD0n8rmUZAuLwJQAHgPFmDzjWlrLSfMTzpisl8DKVuN1dzJu3x04iwM51cEBazX9xq20u4T9QEuPRxLsjUGH0tygteQD746ip0Qpnr4uwGaja\/86\/OIF6iDH5xyRrqdtGTUpsDr5vnZoYusfmoG3TZLpGz94nsaS3iatVrKv4UlkMi17MWXtbMNZ3meUA2Wf7jXGyg7BZ\/bm\/Effq9ltqnz0gk60DuN85IMlaEzPymPSA5TW4zyu6Dh4dmQxlUtvZDaA8s57OJQWPxwsYlwsdrGYkrIzrXFl6XoHXu5k+d1C7w7Dl2Ha6xgTSLWFSFkPGdJm2qWgg3EQ7TwmfRyA==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"19952254\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":13}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21913226,
                    "name": "CBD- Central Bar District",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21913226\/39cec2d3c0797d21e0a4c047f4ccdb93_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21913226\/39cec2d3c0797d21e0a4c047f4ccdb93_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21913226\/f56b229c33a1b8219a780520f54f04e4_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "3,999",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "3,999",
                                "reviewTextSmall": "3,999 Reviews",
                                "subtext": "3,999 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,700 for two"
                    },
                    "cfo": {
                        "text": "\u20b9700 for one"
                    },
                    "locality": {
                        "name": "MG Road, Bangalore",
                        "address": "3, Church St, Shanthala Nagar, MSR, MG Road, Bangalore",
                        "localityUrl": "bangalore\/mg-road-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                            "name": "South Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bakery\/",
                            "name": "Bakery"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,700 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/cbd-central-bar-district-mg-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.4 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18749377\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21913226\",\"isNewAd\":\"34\",\"ad_position\":\"14\",\"slider_position\":\"14\",\"slider_sequence\":\"14\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"URUrGP9qhujNMGRqd7Aox20TMcbjEBwjdVZWGxEio+0Nig70AQs1lRv63qRGCoCbA28sVDVZM7RS4oKCnTQeao0BeuX652yMRGXoOPOjBsMWy7rNRMk\/ph9R+b7FVBb2yaVQagy9Zu8BQPHDiTYh38rhdrAi0XjoWV5o8tck5494TWPDLaR8OQ0CqMZyvnhLNIcam3oj3CusDlTFgIXGZHiypwN46jd6Gh18D9YTWbxEeUSYSBzSLkEgEPWB2OhkpNRMqjPulbIN1dppGx+2kvWBKf9460vYRPqg5VFCjQ4AZ+LNrwvkidcdDbZOz4hRY156XhbQWe1IEtM5FqvX17umX8mUXAYwQIfV+dr82dQs3dXeHe7ar7ElSxdQ1WUzFfdPB1T5Ib5\/EDtncMa67awaxX3C9Za9Y4YE5xIMJPJNcOHbLREz8JWg+8SL8eKgEY1KEibSxikNaIEybhBR1CZhssm47t9raRYCAdNuHlmbslXCM\/pzT1VbjYDII+GX0S104G\/EfpZ0+4jy8WEzszLO8zYbEWvudlm06e2Dl4kdS15NCpa9m8Jdcu2+F4XvRHP9wbjp0gk8NnoiSssbXX3AoJatpfFtjI\/igEGY145otfDmM4N6BsxoCDIA8Rk+FO3KEyJ1j53QM2pCY7CwGpkVlaQZ++7VmAaRSF1RCy0P77C1ZHMBQVBZSKktermQ9i\/jEHypf1fAfzot8lu331wSRcqgjNCl+xLlcbVOF6N+JDqUUW3MEZ1dlxV\/Hegk9\/WnL9\/qX1Pm8dp8\/qnR2OIVd6ss\/\/WxwEBjb5XtG5b8uv7et71ErBhfIAARDBvu\/wyE7a7cT2+ODEAtgwBoSEkXWcG8mUOjtnm+cnzBFwHBVEZC4Z0jHxj7Ak\/ZfQDfvbwhTHo=\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"21913226\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":14}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 18494064,
                    "name": "MISU",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/18494064\/cb8c4565c83508703a55db1a0c1d7ee2_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/18494064\/cb8c4565c83508703a55db1a0c1d7ee2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/18494064\/56f26b95babd3cb184e9643b250f5741_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.6",
                        "rating_text": "4.6",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "6,080",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.7",
                                "reviewCount": "4,308",
                                "reviewTextSmall": "4,308 Reviews",
                                "subtext": "4,308 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.7",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.4",
                                "reviewCount": "1,772",
                                "reviewTextSmall": "1,772 Reviews",
                                "subtext": "1,772 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.4",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9800 for one"
                    },
                    "locality": {
                        "name": "Ashok Nagar, Bangalore",
                        "address": "1, Sobha Mall, Shanthala Nagar, St. Mark\u2019s Road, Opposite Metercube, Near Ashok Nagar, Bangalore",
                        "localityUrl": "bangalore\/ashok-nagar-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 20 minutes",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/thai\/",
                            "name": "Thai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/japanese\/",
                            "name": "Japanese"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,000 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/misu-ashok-nagar-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "918 m",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18751963\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18494064\",\"isNewAd\":\"34\",\"ad_position\":\"15\",\"slider_position\":\"15\",\"slider_sequence\":\"15\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"MAZZ2vU1sqdvL53AxHHnLiOCEhL8wVl0KABvo1BHGaZogES0C5xuhN\/UkjokYIcGII9qI\/bBv7UwUk+piQFJJIexnJduB+v2n0O9BNfJGfX09WJA11EJqCyqsJjUsZUSFgd\/fy9d2s4rimb\/6PoUdxSi3yWGiSyovG+BK84QPKCW68EkOqwSJuL\/cva+izA\/CdmOGd+OJ0PRCOhcXXftqcDwd504OxedE1YHE6Nw7e2nV4flF82Ln+i130na6X+Kb\/yUoRN7VAN9ROtjVe5uz4tvzRd23epLqmTcYdDiJqNiO8R4JgZbPbpftSqw8R8Aog5UzlU3JaVxI935mEZlVzu4punKjg8uL+k3K7PjFu7EnQY\/SvCG95Q1u4DihzC9Bf4zP9F04Gr54qTcUYzCZodFy9SyHf+XJaQZAlZ8qczPuFxZ2e+uYzwj5Sse0\/KGrncxGPpGBZRgcDyH0YKPWSRhvmEkWto1ERcU7W9dS2pSOnlX3JvYih3X\/mE\/4qctR+pKyzO+tOsbHOrwxiDQYRm+5I8bOieM1QfZZvITjjB\/J4um+DKkhTmHyVJcdUHLavSr606zsoXCVeO3BHFbm\/CVJ2osfqcr+c0imIc90h+MsW0bxdmY7jkrH8BXO38UkCI4pVjamSbxcdq+ow\/FUV9R2fSldevhol18vFy6pJjJEjhEBU8ka3VrpTopo5PVwsR51\/AIU7sGZqTwYPqwOcCXoaZmDYQH5GwNnMiRjKA2Arzac6EeqUmicgaHql1S+CrgoND815ce1v9GIz2XlYjy70sSLcQxT6iCdcQD4ToH4XqLhuD9WrVhwdpd8JjtLjfqa15nQynF5wCjy4hgoQUqvwm1jQ7V09juEjrvkNagwKmLrxt01tq\/VvQRX5ZUTp\/Fo+szwQ==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"18494064\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":15}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 54397,
                    "name": "Smoke House Deli",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/54397\/500b9e0e2fe7d609c1673b338f5e7d11_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/54397\/500b9e0e2fe7d609c1673b338f5e7d11_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/54397\/b0994721a5c8a7975185f01234d23761_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.5",
                        "rating_text": "4.5",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "16.8K",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "10.8K",
                                "reviewTextSmall": "10.8K Reviews",
                                "subtext": "10.8K Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.4",
                                "reviewCount": "5,978",
                                "reviewTextSmall": "5,978 Reviews",
                                "subtext": "5,978 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.4",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9950 for one"
                    },
                    "locality": {
                        "name": "Indiranagar, Bangalore",
                        "address": "1209, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bangalore",
                        "localityUrl": "bangalore\/indiranagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/bbq\/",
                            "name": "BBQ"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/ice-cream\/",
                            "name": "Ice Cream"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/salad\/",
                            "name": "Salad"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,300 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/SmokeHouseDeli-Indiranagar\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "5.1 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18755316\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"54397\",\"isNewAd\":\"34\",\"ad_position\":\"16\",\"slider_position\":\"16\",\"slider_sequence\":\"16\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"b5e\/Dc1+uWEDReXF7R5n5SYcTxHQ717Ry3qSSItQr3RQlR+8pF59WezbB+mF4ysrPMeKKYQLpU05OdI+WY6JqHtc1NlPMtaXwQabTKE6KPa4B3Shzt5sWzEi0Coh0l\/wfQJ\/66ZYk6+fsQTo8bXcCjW5EmJef32\/KwZUbecA39hqMaUzRAz6EAUH8TzCDNG+2jWGFO1dWxhCF4dBXt02IJ4ZSAOScKEIO1HlAU5HwqTt17LmNRyd3EDCb9ZZ1P4fy4rA1SoGsQNYdbrquJ4JMMqttFUvsgyDcAHhhYSfajKIN\/qLJ64f5RXZ2\/uf1ds0Y0+OAzl9oQnMJAQEUORxTAZlvZk\/v02AMYLAYXS1cQwsL7hekHQ23QCTJTkmQ1+kiaihqCIjeCGn7uZRfjcPygvk4FfW7YfF6OUzd\/HVdpU\/NWYfNaqiUP4hCsyhQMCV\/ELPBQ1EAAM63U++fOxummXMHaN9DOaXu+hyqfpXa8dPO0NuBvncpmPGrDOAGBrLk80O99S50ghAi6Wxkxf\/nVqBXRX5h8KjEr\/hLYh2+O7ZBUI89u2ApVbPIIOQYYrT5g3SG7WDtKKFrAkRg0fS4WvjLN77cBR\/1bLRM5uJXCZQDmTv3iwXRMcBlIUiOXssifgeFHvI3DjRNQzQ+7KgnSDnTelSh4\/FJxx7hKkGXk2fTF\/KyEJPkl1rTgdwu7NKLt3FZjFSl8A6Q\/BmEsAepORAmTGKwCOxBPImwXE9L7YgDUQpd\/c\/ggq4sVwvaDztwlt4LbVIbFyQbRup9bnKfVrplsuNCmhVQn8y0oqOLBnREaFbF4CM4O8BtYK3+p8FQ3TojEZ\/07rlreXxmyE3Ij5KgMzewkMsdI9YMFJl\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"54397\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":16}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21136495,
                    "name": "Magic Mocktails Cafe",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/21136495\/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/21136495\/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/5\/21136495\/9189886080e6390199708c66ee77671e_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.9",
                        "rating_text": "3.9",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "9",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.9",
                                "reviewCount": "9",
                                "reviewTextSmall": "9 Reviews",
                                "subtext": "9 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.9",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b9200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9100 for one"
                    },
                    "locality": {
                        "name": "Chanapatna, Bangalore",
                        "address": "GST Office Building, Chanapatna, Bangalore",
                        "localityUrl": "bangalore\/chanapatna-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                            "name": "Street Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/shake\/",
                            "name": "Shake"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b9200 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/magic-mocktails-cafe-2-chanapatna-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "55.6 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"21136495\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":17}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 19012590,
                    "name": "Just BLR",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19012590\/06c3d7aca07efe51a9f0777f19625087_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19012590\/06c3d7aca07efe51a9f0777f19625087_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/19012590\/c814969bec60542b8f634552cd96a53b_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.4",
                        "rating_text": "4.4",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "12.4K",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.4",
                                "reviewCount": "12.4K",
                                "reviewTextSmall": "12.4K Reviews",
                                "subtext": "12.4K Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,800 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,150 for one"
                    },
                    "locality": {
                        "name": "Brigade Road, Bangalore",
                        "address": "185, 1st Floor, Deena Complex, Brigade Road, Bangalore",
                        "localityUrl": "bangalore\/brigade-road-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/american\/",
                            "name": "American"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/street-food\/",
                            "name": "Street Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/kebab\/",
                            "name": "Kebab"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,800 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/just-blr-1-brigade-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.4 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18762768\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19012590\",\"isNewAd\":\"34\",\"ad_position\":\"18\",\"slider_position\":\"18\",\"slider_sequence\":\"18\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"rCRubYC3TXUM7dQSgf9kMOsB0aHVOryVrVTKpPTXKBNMv5OjqLsldV3COaJ0GoKIOMPTCm48gh0VCNRHg1lxqEM0XArPRhLjXBsU2IS5ZKR5s7Es2UFiu4xO3Re44lCEzYm+wj\/rqCWjQ21iV86yAIkuqSuLknI3PMZIPQlKBn8VWfZ7cbOgKwq0X3k9AzQ3PL3sNip6GT9w+fjOCQIZb3wIlUDSToyc4g8enFYuW8sex70KTEqEK7ZYs9Ckg8XGDIjjwMO\/vDrZmEretAmLJ4gE1iAh45r+5VxFsi5ElMAaMKZmx2E6\/jSMhILftNI4hT3M94W8kJJXS4G+hgwxKQqNCohsRXE1FX8yBNwdyr3SjM3E8rbA+QVoTkMl8I9lA\/m6BdmN6Q3t9ESaDxlP9+\/\/pMgIb\/rlQSsiNWfcyzPFY0r0HrjeF4SMyelJMOzVrAWiXUDHx\/DDWENtdnQlSa7Fm9IToKChUW61PwRJLRw7yXJb7duYdyV9r5EQmpEsC4QO1qGrsrTyzJiOR8IcZy+fMI0O7ySUu96RrwCKo46OZs+ppSnH5CTiKzM\/\/VIORVTZ4HLwKtTr6994pWG8+OA8LHY4z2CzLbyH0yIjeWQv1vGBUAyIkXVKzkW7rOld7OBUkQmKuFRiWZLGNeQsnDgtUR07Bg18qqLZbir+t2B8RmFlVjFnJtpOSafxKhmmkiGwoRpO5dMm\/M3X6lp9OeZ6QM\/bhPNYg5c8w1d8YMW\/oDi+XulQGGMPvBbalQI4rVJ4z\/1NtmaTaAvISz5N9DXZevEih67hR7IvABGvUSmtDF\/pA4lvJscG50GptzGM4I5GiEzv5GW2m39BIwikrIoY2hZXzf4TVY52I9H1\/mNEfKZ+yjfBGhkH8nBPJxWlmqg=\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"19012590\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":18}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 22281278,
                    "name": "Paros Brewery & Kitchen",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,273",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.1",
                                "reviewCount": "1,273",
                                "reviewTextSmall": "1,273 Reviews",
                                "subtext": "1,273 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.1",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,000 for one"
                    },
                    "locality": {
                        "name": "Rajarajeshwari Nagar, Bangalore",
                        "address": "35, 5th Floor, Opposite R V Engineering College, R R Nagara, B.B.M.P West, Rajarajeshwari Nagar, Bangalore",
                        "localityUrl": "bangalore\/rajarajeshwari-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/pizza\/",
                            "name": "Pizza"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 20,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "20% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/paros-brewery-kitchen-rajarajeshwari-nagar-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "11.5 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"22281278\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":19}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20790444,
                    "name": "Pangeo",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20790444\/682bd2211eabb12a9de58e4e1bbc12c5_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20790444\/682bd2211eabb12a9de58e4e1bbc12c5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/20790444\/bf1e7260ea8e78d0bffc41b481bb8cc2_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "5,785",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "5,771",
                                "reviewTextSmall": "5,771 Reviews",
                                "subtext": "5,771 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "14",
                                "reviewTextSmall": "14 Reviews",
                                "subtext": "14 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b94,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,600 for one"
                    },
                    "locality": {
                        "name": "Brigade Road, Bangalore",
                        "address": "4th Floor No-171-172, Rex Walk, Shanthinagara, Brigade Road, Bangalore",
                        "localityUrl": "bangalore\/brigade-road-restaurants"
                    },
                    "timing": {
                        "text": "Closes in 1 hour 19 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/modern-indian\/",
                            "name": "Modern Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/mediterranean\/",
                            "name": "Mediterranean"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA3M1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/grilled-chicken\/",
                            "name": "Grilled Chicken"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b94,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/pangeo-brigade-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.3 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18750067\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"4\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20790444\",\"isNewAd\":\"34\",\"ad_position\":\"20\",\"slider_position\":\"20\",\"slider_sequence\":\"20\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"g3ucKHOSwepOmomNm5nXnZ6IJE4OleU0Km0CYXxWaLmp3+IQMxAB5TxAV\/Y5Ujc7NozPn702LUW6hsFuE3lLL+bcta20IU8QN0k4B2hcfQNY7kunRbii\/v5IMKxaS+HjwJvS\/LIo+UVUr8God2E+6kh4K4X\/MH0f43Q\/L4Xu3eriVs8r4lYvCcKazuwZ+LpiC+UoOkLtE1f8HJ0u8cpiuuBsY2LOMq4OujV525SYRJHUuTlTktlQftTLWhQe2+WBPKIE3oVA1mj9LCYJSIEC2NbCIgBdU8ATCymL\/sBuDJbOli4BOljohoqPsuJK2YXVbM9mwwBoNbFXyGrauoFKrianakoDdW+Wiv3um+LOD9hYP0lux9CwB0QdRIlKvnjuXcOU\/Rtq9wz5Z8\/YKfl8LOdyxT+JTm8ew+m3oPR8twX7vbojfx4PC8\/Z7k8\/HyoQrvflbWtgK4+jXnb4zQnUGqsb5rTIcM14mltSBBVpxDt\/y5Y3ZyXgL9B\/ScfndIL37qj\/SqlCIOpMlV9tPuPnuHtkPUnkXRl0J8MOm4h1FT4JxwAo62\/YsDmiifthjP3SCgb4O0p9pZtKMjSbOT6Jn\/18eFkKl8p2NkxkknwxZW8ZGjroS0aCdVXq3gPebR6XZzU1gWP12RbVIo0trr\/mqoi+fPJaso53wLdsuaDg49\/rTD7ycVodBu1XPMse0uaz1o9CITP6k+JETZlEc+X+VRQ9N0+oPv8vvyhwr3ulXGO+PXpGCEWd2e6iRfGJGjkQYWHgH+DEcUo7h0c+DFx48OIP6Ik8Gb7y9kr\/tIVo8YSc+qAf+3Pde7bLeSJ4YHm5olg1eNLJZ9cXSNbljxZ1ckBBdWNf6dV7ctRpS3QS0kiOCq5CmGi9cL8fyLVVMojU2Q==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"20790444\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":20}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 50318,
                    "name": "Cubbon Pavilion - ITC Gardenia",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/50318\/0cd225d57bbc03af46ef1b7a929af2d5_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/50318\/0cd225d57bbc03af46ef1b7a929af2d5_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/8\/50318\/3b88002a52f415d026d30d9c10aef59f_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,097",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,097",
                                "reviewTextSmall": "1,097 Reviews",
                                "subtext": "1,097 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b96,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b92,400 for one"
                    },
                    "locality": {
                        "name": "Residency Road, Bangalore",
                        "address": "1, ITC Gardenia A Luxury Collection Hotel, Residency Road, Bangalore",
                        "localityUrl": "bangalore\/residency-road-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/thai\/",
                            "name": "Thai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/south-indian\/",
                            "name": "South Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/bangalore\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b96,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/bangalore\/cubbon-pavilion-itc-gardenia-residency-road-bangalore\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "524 m",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"entity_type\":\"restaurant\",\"location_id\":\"4300399395616063488\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"92d813a9-d705-4459-94d2-c29a5182328d\",\"request_id\":\"d15e3ea4-26e4-453e-a35a-4e3b50ad7d2b\",\"entity_id\":\"50318\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":21}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            }
        ];

const RestaurantCard = ({resObj}) => {
    const { info: { name, image, cuisine, rating, cft, locality } } = resObj;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
                <img
                className="res-logo"
                alt={name}
                src={image.url}
            />

            <h3>{name}</h3>
            <h4>{cuisine.map((item) => item.name).join(", ")}</h4>
            <h4>{rating.rating_text} stars</h4>
            <h4>{cft.text}</h4>
            <h4>{locality.name}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {
                resList.map((restaurant) => (<RestaurantCard key={restaurant.info.resId} resObj={restaurant} />))
            }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); 