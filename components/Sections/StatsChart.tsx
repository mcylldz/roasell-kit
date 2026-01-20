import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const data = [
    { name: 'Oca', sales: 4000 },
    { name: 'Şub', sales: 6000 },
    { name: 'Mar', sales: 8500 },
    { name: 'Nis', sales: 12000 },
    { name: 'May', sales: 18000 },
    { name: 'Haz', sales: 24000 },
    { name: 'Tem', sales: 35000 },
];

const StatsChart: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-roasell-dark border border-white/5 rounded-lg p-3 md:p-6"
        >
            <div className="flex justify-between items-center mb-2 md:mb-4">
                <h3 className="text-sm md:text-lg font-semibold">Büyüme Trendi</h3>
                <span className="flex items-center gap-1 text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded-full text-[10px] md:text-xs font-medium">
                    <ArrowUpRight className="w-3 h-3" />
                    +124.5%
                </span>
            </div>
            <div className="h-[200px] md:h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#52b2ce" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#52b2ce" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" axisLine={false} tickLine={false} fontSize={10} />
                        <YAxis stroke="#666" axisLine={false} tickLine={false} tickFormatter={(value) => `${value / 1000}k`} fontSize={10} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#161616', borderColor: '#333', color: '#fff', fontSize: '11px', padding: '5px' }}
                            itemStyle={{ color: '#52b2ce' }}
                        />
                        <Area type="monotone" dataKey="sales" stroke="#52b2ce" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default StatsChart;
