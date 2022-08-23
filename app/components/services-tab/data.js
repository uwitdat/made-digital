import { FaConnectdevelop } from 'react-icons/fa';
import { GiPlatform, GiBeamWake, GiChart } from 'react-icons/gi';

export const services = [
    {
        title: 'Customer Retention Rate Optimization',
        des: "A 5% increase in your customer retention rates can lead to a 25-95% increase in profit. We’ll show you how to make your customers feel valued so they’ll keep coming back.",
        icon: <GiChart />
    },
    {
        title: 'Website Design & Development',
        des: "If it’s code you need, we can do it all. Whether you need custom tweak, feature, migration. site speed upgrade, or an entire website designed & developed, we’ve got you covered.",
        icon: <FaConnectdevelop />
    },
    {
        title: 'Replatforming',
        des: "Migrating between platforms can be pretty daunting, but we have you covered. Most of our Shopify Plus projects involve migrating from Magento, SFCC, BigCommerce and other platforms. If we’re handling your brand’s replatforming project, trust us - we’ve been there many times before: Your data will be transferred seamlessly.",
        icon: <GiPlatform />
    },
    {
        title: 'Site Performance Enhancement',
        des: "A slow website can decrease your conversion rate, increase your bounce rate, and make for a crappy customer experience. We’re committed to making your website become the blazing fast engine that it was meant to be.",
        icon: <GiBeamWake />
    },
    // {
    //     title: 'Data Migration',
    //     des: 'Data migration is the process of moving data from one location to another, one format to another, or one application to another. (temp description)',
    //     icon: <GiDatabase />
    // }
]

export const titles = [
    {
        title: 'Customer Retention',
        ref: 0,
        icon: <GiChart />
    },
    {
        title: 'Website Design & Development',
        ref: 1,
        icon: <FaConnectdevelop />
    },
    {
        title: 'Replatforming',
        ref: 2,
        icon: <GiPlatform />
    },
    {
        title: 'Site Performance',
        ref: 3,
        icon: <GiBeamWake />
    },
    // {
    //     title: 'Data Migration',
    //     ref: 4,
    //     icon: <GiDatabase />
    // },
]