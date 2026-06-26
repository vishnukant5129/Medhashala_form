import React from 'react';
import { MessageSquare, Send,  MoreHorizontal } from 'lucide-react';
const ShareCode = ({ referralCode = "XYZ123" }) => {

    const shareLinks = [
        {
            id: 'whatsapp',
            label: 'WhatsApp',
            bgColor: 'bg-[#25D366]',
            url: `https://api.whatsapp.com/send?text=Use my code ${referralCode} to join!`,
            icon: <MessageSquare size={24} className="text-white" />
        },
        {
            id: 'telegram',
            label: 'Telegram',
            bgColor: 'bg-[#0088cc]',
            url: `https://t.me/share/url?url=Check out this app!&text=Use my code ${referralCode}`,
            icon: <Send size={24} className="text-white" />
        },
        // {
        //     id: 'instagram',
        //     label: 'Instagram',
        //     bgColor: 'bg-[#E1306C]',
        //     url: 'https://instagram.com',
        //     icon: <Instagram size={24} className="text-white" />
        // },
        {
            id: 'more',
            label: 'More',
            bgColor: 'bg-[#94a3b8]',
            url: '#',
            icon: <MoreHorizontal size={24} className="text-white" />
        }
    ];

    const handleShare = (platform, url) => {
        if (platform === 'more') {
            // Browser ka native share window open karne ke liye (Mobile par best chalta hai)
            if (navigator.share) {
                navigator.share({
                    title: 'Share Code',
                    text: `Use my referral code: ${referralCode}`,
                    url: window.location.href,
                }).catch(console.error);
            } else {
                // Fallback agar native share supported na ho (Jaise desktop chrome)
                navigator.clipboard.writeText(referralCode);
                alert('Code copied to clipboard!');
            }
        } else {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl max-w-md mx-auto">
            {/* Title */}
            <h3 className="text-xl  mb-6  pb-1 px-4 ">
                Share Your Code
            </h3>

            {/* Buttons Grid */}
            <div className="flex items-center justify-center gap-3">
                {shareLinks.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleShare(item.id, item.url)}
                        className="flex flex-col items-center group focus:outline-none"
                    >
                        {/* Circle with Initial Letter */}
                        {/* <div
                            className={`w-14 h-14 ${item.bgColor} text-white font-extrabold text-xl rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}
                        >
                            {item.initial}
                        </div> */}
                        <div className={`w-14 h-14 ${item.bgColor} text-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                            {item.icon}
                        </div>

                        {/* Platform Label */}
                        <span className="text-sm font-medium text-slate-500 mt-2 group-hover:text-slate-800 transition-colors">
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ShareCode;