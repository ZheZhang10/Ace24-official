/** @type {import('next').NextConfig} */
module.exports = {
    sassOptions: {
        includePaths: ['./app/css'],
    },
    async headers() {
        return [
          {
            source: '/packs/js/sdk.js', // 脚本路径
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self' https://ace24.xyz;", // 允许加载ace24.xyz的资源
              },
            ],
          },
        ];
      },
};