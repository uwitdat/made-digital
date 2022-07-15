import { FaConnectdevelop } from 'react-icons/fa';
import { GiPlatform, GiBeamWake, GiChart, GiDatabase } from 'react-icons/gi';

export const services = [
    {
        title: 'Customer Retention Rate Optimization',
        des: "We implement industry-leading conversion strategies. Through direct customer feedback, heat-mapping, A/B testing, and innovative win-back strategies. We'll help you significantly increase your customer retention rates.",
        icon: <GiChart />
    },
    {
        title: 'Design & Development',
        des: "If it's code you need, we can do it all. Whether you need custom tweak, feature, migration. site speed upgrade, or an entire theme developed, we've got you covered.",
        icon: <FaConnectdevelop />
    },
    {
        title: 'Replatforming',
        des: "Migrating between platforms can be pretty daunting, but we have you covered. Most of our Shopify Plus projects involve migrating from Magento, SFCC, BigCommerce and other platforms. If we’re handling your brand’s replatforming project, trust us - we've been there many times before: Your data will be transferred seamlessly. Your integrations, soundly connected. And all that traffic kept running high.",
        icon: <GiPlatform />
    },
    {
        title: 'Site Performance Enhancement',
        des: "A slow website can decrease your conversion rate, increase your bounce rate, and make for a crappy customer experience. We’re committed to making your website become the blazing fast unicorn that it was born to be.",
        icon: <GiBeamWake />
    },
    {
        title: 'Data Migration',
        des: 'Data migration is the process of moving data from one location to another, one format to another, or one application to another. (temp description)',
        icon: <GiDatabase />
    }
]