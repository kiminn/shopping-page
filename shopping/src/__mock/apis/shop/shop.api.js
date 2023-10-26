import { rest } from 'msw';

// ctx = context
export const getShops = rest.get('/api/Shop', (req, res, ctx) => {
    return res(
        // 성공
        ctx.status(200),
        ctx.json([
            {
                id: 1,
                price: 130000,
                title: '졸피뎀',
                description: '잠이 안올 때',
            },
            
            {
                id: 2,
                price: 90000,
                title: '스틸녹스',
                description: '반알만 먹어도 효과 짱',
            },
            {
                id: 3,
                price: 1000,
                title: '자낙스',
                description: '안정제',
            },
            {
                id: 4,
                price: 1390000,
                title: '멜라토닌',
                description: '처방없이도 살 수 있음',
            },
            {
                id: 5,
                price: 90000,
                title: 'msw 사용해보기',
                description: 'mswmsw',
            },
            {
                id: 6,
                price: 1390000,
                title: '잠',
                description: 'sleep',
            },
        ])
    );
});
