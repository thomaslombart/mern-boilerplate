import axios from 'axios';

import User from '../models/User';

const getPlayer = async(tag) => {
    const response = await axios.get(`http://api.cr-api.com/player/${tag}`, {
        headers: {
            auth: 'e58738668dda4be692cb059ca45e92a3a4d5ff3e7f0e4afa8f3028f2108c1ecd'
        }
    });

    return response.data;
}

const getClan = async() => {
    const response = await axios.get('http://api.cr-api.com/clan/PVJ9PQ', {
        headers: {
            auth: 'e58738668dda4be692cb059ca45e92a3a4d5ff3e7f0e4afa8f3028f2108c1ecd'
        }
    });

    return response.data;
}


const updateJokers = () => {
    getClan().then(clan => {
        clan.members.forEach(member => {
            let crowns = member.clanChestCrowns;
            /* TODO
            User.findOne({
                tag: member.tag
            }, (err, user) => {
                if (err) return next(err);
                user.cl
            });
            */
        });
    });
}

export {
    getPlayer,
    getClan,
    isInClan
};