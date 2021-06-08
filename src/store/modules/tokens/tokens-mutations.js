import Vue from 'vue';

export default {

    deleteTokens(context, {tokens}) {
        for (const key in tokens)
            Vue.delete(context.list, key);
    },

    setToken(context, {hash, token} ) {
        Vue.set(context.list, hash, token )
    },

    setTokenInfo(context, {tokenInfo, hash} ) {
        Vue.set(context.tokensInfo, hash, tokenInfo)
    },

    setTokensCount(context, { count }) {
        context.count = count;
    },


}
