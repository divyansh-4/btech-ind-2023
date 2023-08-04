import Card from '../TeamCards';
import FlipCard from '../TeamFlipcard';
import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import ReactCardFlip from 'react-card-flip';
import "react-multi-carousel/lib/styles.css";

const Team = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setIsFlipped((prevState) => !prevState);
    };
    
    const [isFlipped1, setIsFlipped1] = useState(false);

    const handleClick1 = (e) => {
      e.preventDefault();
      setIsFlipped1((prevState) => !prevState);
    };

    const [isFlipped2, setIsFlipped2] = useState(false);

    const handleClick2 = (e) => {
      e.preventDefault();
      setIsFlipped2((prevState) => !prevState);
    };

    const [isFlipped3, setIsFlipped3] = useState(false);

    const handleClick3 = (e) => {
      e.preventDefault();
      setIsFlipped3((prevState) => !prevState);
    };

    const [isFlipped4, setIsFlipped4] = useState(false);

    const handleClick4 = (e) => {
      e.preventDefault();
      setIsFlipped4((prevState) => !prevState);
    };

    const [isFlipped5, setIsFlipped5] = useState(false);

    const handleClick5 = (e) => {
      e.preventDefault();
      setIsFlipped5((prevState) => !prevState);
    };

    const [isFlipped6, setIsFlipped6] = useState(false);

    const handleClick6 = (e) => {
      e.preventDefault();
      setIsFlipped6((prevState) => !prevState);
    };

    const [isFlipped7, setIsFlipped7] = useState(false);

    const handleClick7 = (e) => {
      e.preventDefault();
      setIsFlipped7((prevState) => !prevState);
    };

    const responsive = {
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 
        }
    };
    const customImageStyles = [
        'rounded-3xl w-[40%] h-[45%]', 
        'rounded-3xl w-[30%] h-[38%]',
        'rounded-3xl w-[25%] h-[25%]',
      ];
    
    const appImages = [
        'https://lh3.googleusercontent.com/fife/AKsag4O30hc4zZf_P9IbLVNJsXxurUF15mVrL2szjSQGBAULJOXPFouNzhvsW81Ms5jaKzb-30DDMyqet4LGjgu0FYyPQYr5SF088LsoFc3OUs8qwW9BzFWJ-LoX0oZQBsyW77jnNi0A0Y_FV6BhAA9BHnl9V86YYo2o1QkRKV7WL-SnBoVfZqdef6_GOi0c36NbO-N0wAm-7E1N8Z4a5uX6znZ0RRe4-hxkDKMe-mhUGM7E2GIY-58U4jyQuDfT5Ls3Jfed6DCezSPneDj4mhq5FrgPZRsvVl1qBSkEzSsQuQzEc2gNbZ5rBFA8DjzCAO-4HCGfLHHPVPXsRMaF39-s9ebbbVflbq_TQHgg73C6BkIeJk2P7-DVLIAzpavCqOgNZ1uuD2wU20t6FBQlUE-sItAopfckkNEkyKi5uNKM5AESnDbh52_QhvoWWBgV15PrY2mgIKtHc-yWHT3i_wIhJ_soiKP55zGTHvGCQ9A8ovSVo8dl_Yiwzq3HthUmW6E6pKR1XL7-a1xjGSCKx3DJur6IBCMpPDCQSP599P_YGielnPZI90ohw_2B3Lxbw6H8YdFVZ2lHmUhcY9-s5m07FjuiWRT_iuKY2eMKqpV1hD05s8Q38Y1JlsqfIDyS5YZCPXlW-XjFTl9-QX67oL7DYfuDzm1pPNG3m-aIJuQRY_-A53ldvKAIj-Lbw5L1awUU8oRlEne-aYadfcE60fFCfvmeYiXQlqF4i-nYEuC1cLED05sMFimu_AS-KDgMFhxC0Sq3j8TF5KuuSA7rUHybsGN1Z7wUlIUGpIQtjlI3ExKJGe2_Vwf8G8S9xIOIv9smOT_n57dVO4buqIJa-D3fqbWUeNUUvpI8IxVRU1YbHG9ft3f1ZxNLqNWXGDKHrlYEAjo9pBxskeK8iqUISdv4_hOsGz-ZcutUSI-LTp5YAiUK741plnFwdl7OEeosTI4Gh97XQnmpPw=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4MchMmCuVZW5N5RY63ojnCWHVyM_RNyLlSnG9Ju2nYTr0LyHEnESL0-S5KJtNgx8-NIv5U4sI68vS4JtMfOP1NTM4PKypG0tOaerNeRt3TX_Mf38n203gjtdl8OLJuSoYSxqHP8SJKjTwqfHpeJnClBOH2Ktckon1zh4TBP9pLUcVWrB_SZ93-7rhDDmEBZ2JLoQ0o6vyb5DGz1ZxFtNl4kjDiyi3LjhOj3dQ8MXpNIWMDpG0IHVIaQzdRySRB_X5UeJEr305yBDOHVicGB7lpwpDwa-zpbvKo94G9Vnl8EQOqY1fueXWp929bjApGEYaLX8TIpGBIM4qkFO7AS_AzFfQRff84WKMOkOsgypu2ScbzM1HF-l6IS0AcLBonMKnxwt68UloFWEhQWepupX0Ww4-VkFvAWWqfJUvCNl_tMyrWYgM9T-yjKF0XBNgsGWd-Aw5yPuqn_lnnatLd9OHGdd3vrXGce5ykHfJEVDTGzoSr9cGFwT6-m97fOGKa45MnKHhOpgu3WD0gFwv-z2CmvI53VHg_aBdYU9HwBoV5904PFFeyf8L3CPW-rScRclpwd_IJzWIqsi6ppqkzKxzf01NVLT_plh-4rOcnqOWL5cbmA8024K4wTUIcL_ccJh3U8W8wi8M1j06nYJV8YA4F3YJqC-7M3bLst_CIrUJlyt53_REgHuFxBWHJ50-VqSoCG4Gs1pClf5MPrVstZAZQzLb5jnYGui4HAnuKA1SWRDK_L_FYV-5Zjj_2pzK69LwVdGO-VvIrQq8fCTJP12HMU6wm907EowFNxoqkCIW48_emsdptuNnrhcJFmCD9HC2I5DRPwIJWP7PoHvjdNbktFQ8wXdF_jjq0Wf8LS4FxCv-iLU0Y7L2HFWmRywH09-qCmSyvYs71ZQyjZ90rDhw-2ISwNVyro1-sVAucxl3cs3RGuX_Gy9KmECHPQJHk3BcBxeQTx_w=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4MB6HZ1c16q9bAkrS-E8ws0m_yCUyQVUaNmm0xWJuERoXWXlseCzTp31Gxf2lNv4fZmUPXg0Z5qqsAvG4HgcwiJbxA9VDn70PyZVcU4G1tgFONaGSlVQJafCzRWsvmDjQ4Ab_mIDwsIEcvPZhTyF6cCQYkwTEVHo8laFAXUqknw29OBKlMVjc9gDtyvhfKcKv2Y-b_fBbZsF3V9liMoWaT6Yq8dw4eV4s_JtMYlLmS0OcIZARNcWph98HXy5BCo099v_QYLgOOlv_eRtY3p8JYKEbAddKriXJC156NiloQcvFqzfAocCXdezZ93hx5qUmeVhqQATcXWUGgCEVKiCBGYtu_IxHSp5lW-WP7mmqQJ2537vUHvZYf5S1tpNCCldDc4jtftIenDvLzcbHOpxiuImy7rLygHL1wUognu9lJUoe-1lijoo1v1i1ch25kZN6a3-ILhfFIflwCjecsMwPq-7VChgqgck2fgM5iDHOSG3bVP2yFhy8_ourogHRRE3HMkqDTnbv6NfPBwbmOL5GO5J6bnAGQxfZRWnJkYo6VRwu3TFXVSUNt9dZk2AjgUrSxleH2ECZ7nD6mFOy4iVJiswk_KVzEg36mBi7ouQzhKPKkHlJ7uS2Mqyn4GtrKiS1T-1ifHQ7w5zzbBEVdTALLddZycaEYCGPXzOGfBtpF5k7yxmJjCp1LC7ciAlqbWsZrwv5RtNFjGTp83zO4phRwvS3N-mhtsPVYXIne8D1egx1qbQ3r41PoSNBPnLQ7Us6u_HQ7JCS-Q7peRcL1skc5UyilAF8_eEH7SIWN9ayxwVoMj6TVVsyzogIt_VA-gw6ngnqzIt1sRzzLkJEYgHpXPjMgQs6e5icNU2bjsGKiOtajAeqBGxXv0KbRUNcpEEgfYdAsosiLUl1nujF1phHbU7vPd8ZYdRfJebYK8A8xcz2dEHAL9XkVbtAnzlwU62ZtS61ugiQ=w1920-h892'
    ];
    
    const coreImages = [
        'https://lh3.googleusercontent.com/fife/AKsag4PCl_fD4wi5M5qMCTgaJB9UIGFZNRwvJwI4160yZqDq5GJkO8xbbR8kMsDb6z5cpMcdu_N05vp0AehyESQqZPJaoJyDXU0X11O3rUOeYn-b91wsQOV_IPO8DmSmY-6OUGGOzbXFD0s0SgmD51medirbKynxVgtGoiOwnqlPC5LQfHfzqqzcVNDRm9sEMdAUcvdXfKA60SNRdmeLJp5ZQqDsSs60WfydgItm1t_r6Dtekztn6qU7wfZX5XZY6dsLOzUZitDGo5PbalWlzLPOjvwmPG0CXKT2u18m9c5zyoO4ivY_5t9gphQ8niUkHHZCptZrAzm-OeM9bIn8tbILAUStKE0BAK5bV5r_4qV_Ii2zLnXX5wlSSAjy-Hi2fGHFG4x91Ecb2yPVKYwUdz5tNOUish-tJlbwi4HG3hzr1vhX_hNtfMZB5Ky6rYtpFfaNF_VKG-gHvUsp-BvkfEO5hkj_Z2ajxCnWf24_ljC4NRTHCGErqjods_TlIMcjrU5mkvikfvVyU8caQM9zLNJePgRfwbiQfD2deQellTMNRBaympN4HhMEA3xPm_By7TCy6iLWoFhXKK7dAcxSDBRWUd_fyQp7zezVohfU8Z4VK5Bjydi5tJBhWwKec2_Ll-8nyQouNzawCWWcTYvkOBDc3Byc_g0I8VXPbWSNNpW3n5ZIYHp2Nc81QHxizzzhXPNpdExQ4go0BttoCysv9IXx9puFz2E4YJeNYLhFfXl9f6CJaJ-jIQrgfeCZxFUH6NeFYySTyWS8zGDJjra2iUwbcljAmlLFRw93pXutC6nrTdmO118QvHh2DFCG5j5M7dX9RqGfA8rA79Y7iuS-zx2t08EGUrCgU2yIyqJ5qjcuWCVUchyWuC1Ia49p8vt8vO0fu7nAHlA47lQkuzCo1RPOk07hDeT2WY9xz_dlLdvsIP5EVPI2sPNmgyLCPZb4EIoYpH4m1Hlm-w=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4MC_Hsf1Y31chVpMAvO5dgcg3_I3kH8vHoDZTgF_8quHrelTx1wAbglRVIuWfIeXcAguKVl-HYN1G8e3juUyJa1HbnUVSyVsIrRVg7HPvPVsr578ySuBdUid5EtvVCM8zdgIPfZgz-QBVy3BuuJ7jpAe-ZuXWCYtYM69Dd4MPFG8i2eAI-VBfcvBH5g-GOwWg5-0k5SrFvtB-q8LnopMxcezHM4wfuI4o6Gz7C2OINpuGXqu3H5N4oTaw9Ay78GQiUP3oGM15xofRrFQNov1uDc5metKda-4DmwC_RbUie3jdRtVmmA5YCj2hd8puh9F86jc-wat8Ly8c-QEzROPLgkHM93yDPzY7HPuTfpSP6tfvsvJjmtVVMwzJWKYgF_2dHABGK35fO3qO5f01OqPfG-kGXOwRmN_oiCKAOTP814VdiiphlRIgK-BsXkcyFhOxEaxDdEMVpb7zRFW2FGVeN0F90xB97aFNqpfqq66CzDcv8HmH0gVf6CmPNEe7I6sikXnwfA2WW9uTpV37v-xGpIuDzU7ey7BOoJw_MMf9IxYZaf7zu9ru31jfDVBLwgPkCm0xAsT4DRO0AmVEJD3FHW2ru9hlK1smfXgV-9E6mLJrAiQ7tT-MeJYGMThGOEBb13zDX3q0nUcGQrLW1qNLSs40umLkcZkf6NejM2EqPNp1uIVBwzzXGWczpAzRi3rzuSbZ0amptgiRlNfE_2PTeDegHkZh0UTytvwnRNgjb20U9sQHvVOpXZNsFkfNbyyEToIcyFyETnMI5LkRqYl31H7j-InJwXfP2p8a1IqqTn7ecth4C9awF6EYmdkAK_vuCTwe4c82LS55W-kkd2tkClZCXY4IWc2f7_HoJFlKib34iB8XT5PzRnozcnz3WAj_wBbBO7NvCeEFQwFR4B0fDTU4NkeYTQJArBWsbSzNgzfwUeni0e2tJNV4EgvVqv--zPxTvPaw=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4NCw7mOctKoFMy9H0qltvFLQ-LloFIgi-pJRtz2msc8cAHKossk6evI-W0XUh69USPsO-tM25Y9QBc2xuzL8ETBm1n7lf-6CsgUesT346lLo3kp_PGbbjNpoAd0gmSdBNNE1cE4Nn8gBfon9Psj-x4WEL_h9L76QZBCf2U9ggBWGr7EPOgVYempavyRpVL81rcBuxkJ6XnF2iknhVCEerdQExoNYHoVrIw68VtjBub9opMMnZ6nK23LZ8Xg7o135cNHXRFg3goO8Zv0Ct54hqLYTBTjR_gXwA8KoZVt4J_pG-umqZ1ZcEFhQe2bnZRMtVrpNTJKzfil52tFhTB30PNL6uCWTmAACknKMYT2vePharvAIe4J4GfPHpeo36lSTzrcdHBi6QkRU6HL7Sr-x57GLCkJf1MMOrBxRBCPSziRvSCAu2erCp6jsFBtGp-Omd7Tt29tZuth8xvSDUpcNOqTzDcIdaawvUPrDCdq4H2wLCkC3WsCwb2aj9UbLLJmPGS_VV3PaCB2dBYxyt5rkL9a85m-Zc11vHewcBC8am4W0UO9ogH82HkCa9DVgr2yr8qBTkNwHpIMCL4iGK2nkjEEq2P1150xBk9GG0NgyDHdMf7BwbG1ye1unJKVppaZQfdE0eb0uLkqEPlJcIbK4TuJ3ClfM1M5WrCbdtDskc3wmP1ES0QXbNURcTMNXC9s3PD-bQkDu97Xld-0idunsHSJVsaL-6CzA1Cjp6l1w3WR5doz8pM6hvtj2c-kr3BELAoQLK0VkRLlvMKbQ2lMqEjyvzZqtx0ZFISJTRvZSAhE0OIw5KyTkVXfG12r_--YTCaHgmPU2TaqbrLKM7IZk2k70r0RFEGooCt2D-ywHV2n3eFRojpLkl1TztCWXXjAGCFa91NopLqx_zoYEPnEQsv7rH4UN1tw3ljSF4XMDGsxEilzBRpTpPb91QG5HQmkZjmyx_3Kmg=w1920-h892', 
        'https://lh3.googleusercontent.com/fife/AKsag4N30z07DWBaQGuMdkZnqkbL_rIJXX-MZTf5Q5DzKgzR1oiLiYqD_bCSMAJi0POqe8Vyg1tiROilyo4gVPKm9FvfKeNxoV_qsUY6QkalgpBgfkLa6zPdFKwbz8ClPUYjy5_8twW1R53kW2u8L9IzTi99_MTamI5zkkhTpJ8X1lJ7Sbm0sk5_7SpLLPd58BahKvC1WsCUeUpVwP1vLn2j0BpTXNYOB2cW2I46vFD0z7jhIMi9HicObbxyiflRXVGjJepU4kwrHXQc2uKIPr6IF9UFAPgG9FDJg7-99F_Ns7VwPXegXB4xiCfZQj3LuQrjjPo5c6S6ARXxXxIrQYK6gTBK9dPEku4sj_TzpMh0aW6vVfOt1giLu5cdQuJAfM6UrfG9YpzEsP8QvXXT9VSEzo37KIvlEAXowZpHMSy4i6JBSPxbVvVdvw-x47R_5Gav9dkam2UszZgN2OAX7i6hWcL3TnakhN-lwFErMrsYpBkGEhTeTIhdz-MrmtqS43PAroMNUZXRQHIpnVcKkXdgZIBgGb6EQsPqGKa7Q-hSYh4brUncAF5AC5HFkZ50_BhDzmoLQfu6Y8a2i2S6vXORht9QUnoi6rKZDyb_2WqprCUkXOYLoqeVdjT3LAFMx3jKV-5Ze1qiizBYzxncqosi6Z1Tt0veS5oRKAL0tXi2abn42btMfJUDUVf8gsoi96IOu7lDqrktkaVWxC3oaiHIGCIAMFaq5qnmBLhkbp6bZm-blrpcAC9AIwN-awQPCO7CFDPK2-z_Df5SeAmvb51SneBT92v_7Yu6FqT49oXdoym7pg_ESlh33CzBOtwMA2zge09tx3H2TYIvJ84ByX0S8stT8_hZLbvUfqmaxl-vPauT39KjlRBitHsS62eVTnSkUwe6rsVi-BBBYt2pftOdBLVHgO7ShCgJ0ZsvsruDPI4OCHQ5ToMLAYBlqhkSzqV3doT1S8TsOA=w1920-h892',
    ]; 

    const designImages = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-yVKiQvK3NdPpRF4AP9RNXsfKfv05u-2lKOlev2jAYybALU3hy6340SD1AAGWbUAxmeW0evCwg6PqqVywC0XhjkaSDm-Q=w1920-h892', 
        'https://lh3.googleusercontent.com/fife/AKsag4O85Z220LP_nMxRQs-0fOFcRAzJf004puDrTq1YkOb2PvG_kQuMnTOgNxBHJaW7RhPZuSRcCCd2nQlkvwd2OSNeTLtjpVRS9SaFXx9h0s-RdrNowX_3aGVtjMOH3aEqfHNCGyrbaOeL2JEYvVRPx64u0CkaGMpeTs1KCURohAxfMngbCkFggoOyFVcn8RsD7G5sHuL-IQLRfYbaUu0dFEgt9lUshpNoNpgfoaiKxmnaeYbGNFZJ2IY19yS39brbtFXZLrj5-SyLTRTHEl0zQDBN_jgzSETQIg6gsKs-XZslTPH65klqTOW3Krx_RhcD5d1-AwvuBUOtYUrRg5nmIB4BNN4Zh4_REU9hZquaDjnJAjqQ3-k9KvHb8ZTv9LI-YQIFC7Rqdr74SoAAbkNdFSYRM936X2MUmpHTNNMYc2DwyMyiR1A_b22JWmBII8vXmvC9aToBd-QTfYuWnEvK5KC6PaC3HMCmCWBDUS8kq7BE0_dRGyj26drrimFfVhOJw_RwOEkvvpllaSqb8xyrg5YoGWp8xUroapbzGt0Naqwc1Q6IpvOT6x_KfhRL25npghZlcIkw2r1K4sotEJnaiEQDJ3myAlvaRJ4VH_cHg6PKpNr9BCC3bMuNltVIc3iFNvF3sq-O3l7mzVTUVbsxtkGtmlgpyCIg_wnbKMQeqKtWQDu7QZH-mKRWkWRK24oV6jPBWwsZGpDorSsyj1cQU_tgvT1Z2PNxylwdP9X7OjJXaXCdaiLT0e9Rv9-YFPHmiD27q0pNF7eTq6AQ6SGmBC0p90qt4EZoXcFqKZfL--oOUwV-PLMw1BFQYxpwEYbJ0npXAEFIBg_jRCPJ0LXZAWpYP7FGeV5Yux2vFZK-hhyNYq9pdAjBf8TjnCqNIfKo7DeB3w6K3TDZa5mqkEKe_nrPQP3Z0F_zVWeBb2YNF0IeBoeQjbjZF2_KAlK4qXDPwjNcIjl2cw=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4OGfVqJDhqsu6DmdXPr92OEb4iikaK_ipZxiLFAj1TyoWy8Yoxtifm9UEqmFJH-nzok18gtNS8Sscg18OEH3jUIgtomBBSOnQG-CFeo2raz3BSu2o_2GyfCwdpEW1LMNtpDYiteJyZkfh_Z0yJwMq3S7rOXu4AeUH4RQNWBwqJQQeE2NNj5QPPsPoJOvFyKWgFyKiB4cBynj2xHNLRQ2xZHS473pvUJ3jcsx3RD94YIN_dCRSKG8TtpAB0sOwkVWZpd-6HqXcx_Ou0BCSGaH90IP3sL6fJOjBzcAbuPScTaflc4Ag_AVVQ6Mfmo6UtHrRrjLo3svLW4JDSfTCxSh8-mV62gA3JuyA7AB5UBmKAc50_3cr_HYribWizVjrEZ2o7kjqv_mV-kHXHUpdE1uITFkoJ7IutAD-E2gTgG09pf8WFWqvv3vPwxz6Gt0JgOQUuk1vf6_fh_LmfTuBCokx53hm4wQ_CPUK98aEwYcS6QQLcs-t_hmLxmIGZu4DkcJG-VYkFMtD2lpRqJPrZPfQr9OndbIDW_7snoZS4T6hd-mCEWVhVQIfoDjNqAGZSo3uzj-VDqna-p5xdfybezhcrp9X3OJ_5Fs6N2_8cB35eR37CF7Nvuvab8VB9CCIziI3FKKedflzwbJ1B2VtZAFFJ7-b6Eh-fPuAKCKj0s9iYyhlZ8tSqbL2KO0JAkN2bun8HqincFJJcsaRiryb-UGYJgcUZEgEaJxLWi9XSCpA7oitj0P6b41-HT9yOehVw0ZUBEjPUf3K4rzIUwBcIdzu2HTeujkwa89xbCBS6Ewfgh6AePDokO3od7mUQ-MlUzXu4M59XB39lHvyrB76n8YAuHGsNZN73Z5b05B1b2XsA8zWq5vLmWmm-pJIqvB_zecjY82P2og268OAuyjRoEGxMLSWApoy-l_MwRW-LWEtF5MDUZNHrNN47IcV-hNIUvE1xcYYxUKg=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4PCz__rVThVQQsY1_ypYNp8lCHJwpz4rPoXzyR4aex_yF3xVlNUiPmyx6CRw2HHeETTH2AzzuHlgipB7tFHfePeYiq4gUlvIiUCQ7K9j2Y6JX9SB8QFag3HqvbNRIrQhw_gu632K_EEO7VszDjoVHmIXQ_D-eqabLFGEI3JJ8U1bwYOL-eIg9lmvV5wEHais2cN2Zl8v03br_cHzoLMQQU-3Nzelx_84UKFFFqUHtMexLRveaLz1-1Y4xQ3cJtagU95ZPswjG3FOnOxx4f1qaCl5sw45Q4Mo8tFVT2EYd-HdgamvNX2TNBPuDNapLMKOyIa4u-6oBhinsMe5x4Rs_Ilrd2FH7cPNR3LO3Rrs821uTjV7zGmqekfJNMkUaZQfvDPSkf2g2uT_-LxDvQXIH2gbDu-7eUQghqaL4RtCvBI-unPWlLwPVRnDVnfc2Xf0xc1V-hgGuQqG0qbk_-Xr7T_YLRQRg8ymffk8rh_KNDg4oTRijagaab-Ez1VT2UXo3uXNLOAQu2jFicGt3UryaJBSYeIcQYOyqSERfqYk68gCPUqV5mrpaUrq3x0JIvZ1Fwa5Ep8QGq8C6UhvOOEaneea7jKkOBFRgk0N-moyArLmfWP1zNzHnaqP7zFutdVQWgBbGyPWHAmyGMgvt4Ph_JH9Fr2mj3os9UF2CNreZEP_lUPl8CV3iwH8L-5zF5oqV49b80a51aAFpch00fFOJGbNpsjJdUYkOqc9_KmNkGV7We94o_eps1wKBSqD33RbPJNSFZbInlG8kHOcVy-Q9L5RAHyPI10zps4ZZaGidF_UY70T00--osKnWV28jWb4EbRBqaX-biUH2BYJsV2AHl025YlFDDyV_vKIHYzMoCHQXa3KF1DOtYPgm_8-dgWZKy6w1bGmekJE1vXmoxF6VJiGmw75H6oFUmKXx6oyfuPvLCH3KU4wjKp1jetZHiuSKOVInuSSw=w1920-h892',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-yqT3o-FstQvlvq69185DZRKf-9tSicWIxj4bMrvy8-6czZ7WL57HWyCX7eesATypOrfUVAq8-tGONKTTGpzTwjlaXvCA=w1920-h892'
    ]; 

    const operationsImages = [
        'https://lh3.googleusercontent.com/fife/AKsag4Mrk7SQ1hZFpi-qJhu82bDed59JLuEYlzUl66txajBtKQoNOxm16HrSDczk6tGXr2TZH0G0DF4_yOIsXqVX_Kruf5Df5G69RUUDOQTzmVsi1b1GbkqNiqItOBlPIGXM-THCxEzdbNHf8Lw3o_p5aiIf88aWQg-EeAuXTHF-oSVBXIaKCVWrPg8VbmoE0U70s5sgbAQTqno5ImL2wWs8f2R1elr8uoXDqvFI82nxhFn_eDsHN72fw0A8OrhoeW4T4cf6jvyegnpoXXhBlrWakUYG8WuZWBeU0MM_YI6q3mwyHJWmw6ojiLxe67Z3Sxgb_nagbPZLgoqSWC81zXrgajqZKCdukw0B7NcmmFMNtyKA-SJcz-t_JcaTbF1Ia-p8T5hw15c2Q4LICpIbBy23BN-bQ3nBLJuIwF-UiwJget1ZtdzQAzAooOSkaPIL6RuM_ISrFk5CAe10jWD0D-gdGNnwV6rBHTHZ2VbfCP1d0J-zzVLSlDxMUGIDLqTIuqSvsIBvQWuFeGwCqarPAXDwXIktXF1Nd4ewcOf0xhlo8sehBizn6VjpncPmAwXa4eihGy_unhbD68hCXofuHa746KgpLbR8wlxy6-qPG3vVLhnyI7IpX_YjEjTeZzJ7V4l2KDuGViFI5hKqGZUyhPjFyGc7bMD9H4lgVO-EDsbdxWb1x1336JSzZqujKUxCL4ijDI_e8VEr_6R4FyK0U7wgmQfjGWg6q8cdd7hFznVcUIbFlObbFsObXJV-iQlbcT0drGCYt2lN_tr6SgE8wBBLz2Ry_PzC7nWA2b9L2wAys8oIBhRmhW1c2ViiT-0ziCuRhDuFafv0FFx4cnxPy1FTUsGus1pT8slTjJ9P1LkgPZi1hPJt8udG_qVvtC4pE4hd4brTxGroreYgHcS8erqpQXlLs-Sk7ZhgF0Du8Mnn7wnXpKB_FJZD-EWX8Nh-KGvun19nXFRVnA=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4PP9excfmHNo7zOPpnzRnQ-wD-sbbcuQHIgRl1JqK0_3prxWc6qgpJccKxK7-5SPkBAlzrDUy7N-B0Fa3GfFtJoYqR19ckGPBOBDTI1xxZqThVKiq2RtagKqXQ23-xxUCYEJb9b1379Y_sp0y8m_LwB0ROHEhCgH38xCHCac0rb1X9c-RftPebzhdmftGHWtbVeK3yMncjL40RFL1biObN62fiARwGgT7Z6xZAGASYN5XVFyjolGiVDH5mRTCabbi3JzMUeEl5y5isEcQB7Fdldi94Tn5Px0JC47bbYFs7FEbyckx2kT0LMqPHyQTBzANYANTd7cDYdN5_jXAcbRf4WIMJ5jdOqeR45_MI7P4zsRRjA-3URpJ0R8C84WBgOTiLkp1p22kbyU1NqpAokPqmBC_EKbcmV68Liwxdysrjmdpfbbh50HWd0bb-DQeaqYALbmZHUOj6kAib9lM4a6CKNZncKxzz0WkTwkucfReLoAcmduZ8pTujLuFeCO6EUNWozPunBS227AQtWW9aCqEas4lylbcwM3mzUGu9iATsk1v_DudDj4aGmV9zu-vCln2kP9sP8al7qCWBmXVaYdl0gIp9Q7tcAgMy14ClFIhJNoQfi6uesTik_jvt6f9chEXHYQUzejpPXFrmLxsqjwU-PvZnH0PMnvXecl4UhXVNca8_kwoSG4eC-OS1MTaqO8K9Wd4dXLgFcW8tvvpAFR-5ehxMGc-YKCMBo-Udvjo1y4CCR4bPZcprD5hGhW9_bqyCqOywil422hxqRaQQaZzkhq_gAFEj6yzMRu6x54Xz2p-lqElLjW2ZTnZmCGkoX0MaiahTNI-UqCNz-AT9QLdVc9G3AkqFSDkjVAvGzBxPPk7YJsICoF6ExzsQRWIjv0SS7iSXfSY5DqDQnrX8DSaEzhHZ172f4tN25n_nwM02bk40jYfFCRYm_e6EI_fCDf9zUWkwDmA=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4NQO0gwdxmL2NHO-A3XsF_0ZVO2S4X4KkvTbXUqRhW5JrvE-ZxWK7h8xWFCaJhWlBqoHNvaSmhdVOE7qXDiyDzBEeXHv8ZNajedOO1BVBborVwbWIDFWWLljYtdlviHFt_Pz25gEzaAvu6hUfRns2lEDYwDyQrY4WQr4qkaJ9C0HS0rSEVLt4g5tzK1bVHi-fiH1GvL_5deslBAyHC6b9ytjgSgvqAFN70uhJ10qJeCYXm9fyJkZeoWUvCPgrt-H6lxB6H4a3VV6NR7I68NqtUCCZqXh5BB7c8SGVYGg_6LMhSZVbchSa8k_jsRMNSuWAn-Y3uHrG9WGrgSsabBHvqtDvbd1K7BizZRQHUMHdc-6Skv0oRV8h5apH19czMgwOvw4RD8fZW_JKVlaaLA11w-diRiq2KKuGeCb7vUcltRlufcNLpB8NMUssf6p1l6JSpFV9MwyN34pv3uVdCeVN61g1XUpBIVURwMr_kyygAfg3p3T16NrJ-1OPOT0dRjoowymQ_3jzzG59zMhMhpDVu1X_J2JLa3M13nxHwI0SuQ_3zuUR_Fkvp1I8nEetgMPYloYy_8G9tfLbXLoneLx5QZM0_556q0uwbo6N1ikxNzJaPkEnxio-KYvIqXHAImPK7UGLGw9Nj02mC5NtVMuDcMs4XKRPn4MLnXhK1f-9sFFjWXC6G14IKS3zHXrM7tk9gFLevnk05B3FaeZqSO3L44FqEpBfGpqaXib_85FXON8dhlW3tRo5qSIJet-Eq3pdz1SEltgmri4A0p4Z41I15IHz0cIXRZjML5YmIo5s96CgPFf-YL2oyL1QkS1W0PiCQDnm0_4ccJq1nlpcDRzQFuBMrknPVIoz5x84d2WNPmCY5-CcU9zBhDNxswnx7umM6RVqQLajBLrwmpcEFwtpY75v25kGTA7UHZJn6099oj7-qnnG3_0S4xhqIbRsl5BP8lBQc1Zw=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4N9D-s7amnqgqCHzniiAtMkhFch7p-fTzLsShpD1DRrdM6Fsr5nwk-GpMIwWAKzOKcHC8wkJEyjPA9Tlzr4ZGB7NIvRB-R8EsivW202BgozKS0P6ErF3dOhVqjSvqTccK8Q9wOc32R9ZrCrJ57iNd8SF8kHbiFlkIuyNQbp6IU8fWsYpCNCKr3yukNwRpa5iZxr0Z41RX__zPhrL7FgitRndOzIi2UZavAWglmkLrxIHELYiF_lsp-bDhzABXMgiN1bqdbd42J0tUuJuXwGAXSFV-jFHKPfZv-a16hO7NvftsryIGsH5bPt3y3gtzbT82goAXluo4ZIuK9WOREXGx2ZgAe20ct5WNG-8qiELsXA_p23Q4PjbwippvqUU7NwjK_a28e9Qds4SfyKnjZ1UP7OlZieeZcalTGxZI8sa5YIYHNZoFNm0iMTGvD_-HhoPz-KvWtUB0CoBhr-p4BvRRMyYMLTNBZJI9ZpVB9TJEKLJwvJ82Z6eKDOZj-dX_lmYLcLDt-KVjPsD6J61MvzMln0fCbSEWK4Q59QGovgUBjQzb4wbGTfQmcc6oOfLANDYy3b2ZxJ_7b4_LfxKSomOYi2AV7Wv3fQDuCNGK251qaFiyNso5J6WO1sO1bDYhToFMnkC5XZP19_J3O8XPG4gnlJY1qMsaGQdqCp2qRcr8GoYVXdkmjS-o5XdOQd4rHDZxPodvLa3QiFELTE9zwPoRrkgjoQ1DL7ad-LY-Byl93jgPFhegadYRr9utYrPiV5gjT40RSRQMU7BAtb1IwLcmccCCxe4-8MXmbS5Q1Gd6Nvzkwopo8ZNYuXlIgXByb8bJTTScvGl9u7NVfJx9WlptzOUX6X4XPViqDlC4rdebWqY6Z1L8-AGAg_y94HQoM5h4ijO1_yU3XAh3mI7D8M0R82IKkoofADj1ujIE9tb7Y7xzCzQXPLTrZK-XeGIvKYuon0gjoJ9A=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4NLSwrEBt_d0_p9CmBPrPVSy9oQ3Ea1XUKAwyEPaUVkvKkTlaz_LUYITWb5YTIuPXRZYm1b3Gt1az1cgEtlyomVi1FYrN-K1HV6aVXAZmA4AhEGZdhM6Bjd52Wq5ezy1tcQP7D8TO_2pzIG-jZrzNlafQhjsoeYAIKwZTZilaD4-32AoRha42ftjS_FRWbEnmOrDifbEWhr_wjh8BZSniHKMmECDjjl1k2S-RXUNYbZN6fSdvOymRbC_yOwu_PpWjFkQDgaYP2EfRKrly-R3H3BnQQpFmIg--fDA7L9FUruYiCJBscNynwgDL4gsB-vuz5s_RCtFgVaHoGWQXGPOkMb3YUWuWv0PX3RYwuUZlW2xmsT09oEr0o-fO1Uo53TnVfsftWLj8lInXly1AB6CQ8l7Yy4JUpoF3wrV5KcSjo0IaonaugG6tGAUfCOaNForunWgrscp5w0NDi-ggnWiJyPOjpTnyCK65-h2NZ4A_exRtUj7OuYu9RTxB8ZympHlTyHrfdCMoPG4xRcVCMde9CoLMaFkdwXPyIYNyO520zibpBQvExfEPyvAEd1J7rlaRN6iJKitNyb-UJI8m4UskzeaS8ilKCIcG9--se1NxLV1c7f5NSLk_v91PaYE4IZN9Fmyzfhqw3XtGdVV_35tAiIl_fY5Tq0ro_lGShEOy-w6SUSHAS3CTwsO1nHHvDNkXhtzmq3TLiHh4jiQ0yWJjgUtzi3K7vzZ_h_mNXuXSlMPmB7Z7QEcuQcfUMxKD-45pNhAqJkG4g-w-0Ot9sl4R_0YCHIRLgogHvAkF0rPM02JXrCsEK4KlJfEatDPLRsY8JA5ubInSqfiJcksHa8SkDie5Gt-AuE5_uvhCo9tgBgWCF4WdKlibekpFErJplESwHKF1zlhzcdq4VjinyzCSOgnVZKzraa_QnpfxBQ0vLJor0bk2ITzeD2bZFWKTCNWrs2M7ihag=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4M3SUm7PCPhWnCt8_l_UxblxAdaus8U_1hDpR_ZG5Cf7ZY5bVS3lLYr2G263nkMYiVNmR_SH4T4zrUCknhM1qiCbHOc5HWSj4dUE8HoQjTAaHkVdQAfl8tv7DAffCQxSXqiBsUEVfBlxqxebC4yGjMWnMgeR6EHqIpLjDMNuVxrP5gPU5nRg4zzZviHe8bGmhQmwY0DZg-zlSDzuzGnCsqLdKAPVg4tD6HToOWS9fT7_gHL2VjmmkeDwyBlYPMc45_LyGx-rxEVH4LKcXbp-1hNg-oLFD_mWTxmtzmx9aEIDnMFGSeNqS5su8D_RMWOjD7Q3mK5SMimKJQjChh6tH0bGrYSlRaWFUpWG8QPWn7c5kD0O9SWwDlkFWGnmzNawNirbmhOduwo4hxX0hV98oBzXO5bQLZ0Gv3qMM8MGlVcOTEge-WfexNGF5OmhBdV9SOJbHMuBNBYb_ScA7VY7EKA5c4Xww_j84Fswul58kAClcujQo-DSc_iN1KLYUV9QXQ7Y4UL9oz2Cp9_AjqXMVRIVdjplQwBme9E9fbSSknAcbaS85mZq_Mex6fV-L-OFS3YZ-49NJCT0L8if_XhFHX_xe025CYq0REKo4rbEul5AKv8lGEmk5AVS2w4fY5JvGsxM9XA08Pv8hqBrY9HMoVvW_6x8e1tZMCINryi7Jwzq0Gbz6givW-RFOon4bZXDHvfD63LZBEgEYdUJdyAFefRxlAhohZtMEILMVB8D6FSVEw9IVDC5yF33l4QnmAXBPuN3XpsaP5bNJ3hJfnwBjMkYduinvdQWMo7Cw9JU9piz2_cyBXFe4V5dsFcCWg619qEm3Vi73ncsnLUHvhcP8u62dnxgjkREHUmokyH1zCAvBjL47SRn-cpt-sv8dZN_BzWZeScdaG93djaIfjtY7Yo-cr0moXWzXf3dWg3Yrf9LBeVAfnXGvycp_PbruFz0SWHXm2n-g=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4NYdU87NLTcYHrvNkayBPP6qUJtjdp0C7QyHoeCe-tbJRyvtIB05e9TK2QKLTURjr21-8oi6v8r3cUfKjEAIIbgMDBeJEPDaOQUlAKg4Cho0RdK5etRCkaJKpnIYlkolS8YcSbV0pbYhXPqYUNsIJo8StLYqyjXz3Wcer48hPxjuTUoy1-wAYMP_9EMdi2eFam7rcQ8hd7pl5OYb_2OO0rfqtJAqWNvun3vQ4yloNxPqvp6VmwrUDFRfVOkug8d4QApG_70d7DqTrXp6uxIuAYUn1ngD5LHyCTlpLZumVBUG4lq5RGHGOjoHOqLSpccSyBOVvUPTY9miwiwS9y6NgFIDRW5L0oUNKPchE-ZKsf1kVGeR8V7_-7adbUeUrTJsw_4BNNjaFmY6gPlP1SFmotRWUCEIkJ664ndZDmdmMWzBj4iBHSEyLiieE7rrw-61Tt3T3phP3JvnKXUY6DzmHKMgIohRhDI8O7My8lfdHyiaWYEYazrEq3lygUk0h6htXx4g5jLGzL-Cd7RXInrmUMO2bst4CZngjwTtba3LEHdbS_9hWuXn6R84-vF79arE3wf-zFemy3wCRvPMXV6PnITmTLSmHGe6dPsuOM8jMLRFwv1YreyPTImwRHFu1MLSQ4JwPDbunvxCeFZiKhpLg_OTlaNVAxR-ZGQW0WJB6DYuaeq76VJR3TR2OhQ0PWuFxs2gSCy86FlRLJFbZbCaUqSlBaJDl1nMet3FKzuUAtg6ymSrlyqlI_5H6ep9tAnXxKlkQbtyFSu0PQrLe4bJa7IsH5cwWldrcdusTz3TxVUhkSN_e2NYUMOFo23p42f2-AdrA9RpOiX4IeUtOtUdoX4WrkooATTDRIxODs0hQlDYapDXbFKs8D-QFXX4-TyeftSjPLbSjZQfzEqwqAiO9moJLE6zlz8nFfAWJieSVIGfQxNXrl9CJc148SOquJN65kiJIOtfQ=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4MIqz5e_PzyuYjAzH9PMbd_GgiZfDgTdLh4LHhzdF6iuE25SdufrMzoBLxKQzKd0n9flNVoN0L5fLecPsrl0-IiNytFP_e1iVk8T-7JYg5v9NI2jUFO40_uYziomwtImi-Zt2IJoifAkq4jdNFFAg8zuNuEHA9q9bFNeNJ1stzS1jSlaFIdBQ2VvuOGgeoz8jMxusz4ZX6FQKlYUTxC5cVrMJ01LVYJtqpiBlWW91u88G-wMsMin4yU4V82dSeMNUk5E172CsWxjRImZeNBvJ94RrFGsqnyx-gkxTNpTqsQ7nSdaRJS66RUUuunCt6BMGPRMUCdQBSFRQ59WY29kkMmfKRjLpgNWrbH1xU5r_pTmoj_XXUkFC5xooKge40fj-Tj3SQZXVf0sqi-KQ6Cfyas_A6GzA0TBn1Gx_0bwdOLOvSN21uZF32agr4bvbDDJGxtn6mmedLiF1XH3gSI8PYtW-I6giHgQgJ5YOuab9-Nw_b2CNY12h8N7y4p0W9DUmj5zQUGlxXEhguqlP1mgB1p82-xD70M6UJZrYF3OjoTRrNCs1JrRrUo_4YpWUekN3dcJiT3eH-x-PeZguwmWpruuQZZe6Rn0jId_vKR5bRD6kXeYdDBZeaf-0xyieGoyrAFamT9ipFsLhm7o4h0SocbZACLHMOvAIXjflyHeHIQD1A3YEjM7j5V1lHpF2M-rkaIoMPAD_eETO6vz_woAKhQPSwg2ZEAyE9d7AHQ5DMfBotsQiJkq48WP595cn_SVEDUdL--0hmWHiyzs7XOlBxIsp7U1m7rECuV0N0dJerf2ciPD-ivB9RlijI50DegBvHNHyp9TsSz08susLBNg1u_1rnT_RuzxGTC_sdMuhBhrgnD9wwFw5rT5QAhvlMFq0l52XNy2OqyzGPaKFOfb2tbo-gVsfNUZb46NXTgZ8pRTcZIiWpH8Mh3g4x3PqxboDw0P3eX-g=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4NUwyYVjdTrWKQyx3GBwNITfEQB98bKPAwLGZE6QnF3VjC84ouv5Y2_asoR0zKyt1famwpis07LynfqjVvnQJPxf0Dma9pjyErFaWXOZHNe-tjuciBv3hKjR45GctjX8iuB6Bg4CjDpeUm-tCLdc0gFnmBd-sRslVqlR8iHYVb2pqsuWTrZ33tCKFIxNrU74DHCjZJFhM8hvup_6WQYxBaqnVlV0QKixo0nyA4KHQmkSx76SN4xywVdsSwFJcl0LySHB46MIzC01VwpzfFWflrZND87HL7knwO38Hk7Aj0kiZyodOCqNLxrQD1byy2xZWHvw33shmrFjaY184e6OrimEat8dOP7pEMYIfK8VOpTKErNc2jgSSrpn-askv7BvFfnafmlSna9QHYyMjuUuuWfQ_5PDem7FAKuaCnAjr9n0fpFzHjIbVbdGxKRC4lqIaCWWwICI4w06tGd8ZgGEo-EAL_d5xiHhxWbZLKQwDuqLGXom0-Hb_stuK5O3lCZQa3efK_e-3kzQ_xCAbzPyRpkgiHtXB2kjQ2SYSpHJL1Juk3EUJa57YEshvu9C3clsSVLZ5LheOrZ3lmScDhRTCUi1Y6P-BlSo9qd8dul1_55Z5SycKz0hF_VnR4TD3LvK5O_IFCy9D3ruB9ZPT58PxriH_4dMMZat5d0CbD096LpHCCMxoNfJdApA6qskGRzGofN4ELB4qI6gTJa_686UtiEsy9nejVkvb9UPU-AowStYz4ywStj0nhyxwM3G-Qj7En-fUu_w6NNYvQ45ZHvXNG3Y5bCcm_pZech8EyhKVHUKcd0pMdXkNfXA_-KEKy5e-UZkL6ZvES2WxQ8PoUp8V2Fnp2qohOJXsPlma9ibV9igKd4Czuz3QC5LBryqpWIjBL1ediFCOW55GKQIKRVBidisR6lXGzwYbU7wfAnb62DOghTERwjl2l9eaM_JDIih15-QFlRcw=w1920-h892',
    ]; 

    const webImages = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-z9rL2GRtFibG9MRC_pR4UpHde4HiW_Q7Ypj8eVKDGZhTRmxbg0ioBy43vGG2r2WnEkl6xuUznXSMjXUmoW52ICXJqi=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4N3KDx776MRoSB-cAtlnTFDRgQ069A7aia7dIs9LgEpVuZpe0iRxMHC2wssMrXOcJ6pSWTJ6Ongl_B3I4DHeIxHMFQWKulsDy8xD8Az-d_lBXLWhjQTWwrNUB_Grve4fa3R4tprkC1WF7zbrb-5kgX9r4-ASslBTNq-vhxflyktqTuPWU6-RRGXqtEQAKPHwfdeca35UCb2XsPkmVI3xeoRDR2iWngfM79ZgaENik8Qn3-ldEaTaO49UpZyi8zuCIMImT_OUOgnxvZxqvRZo-ZZl2J5sy9JE6K-Nna5KFQhLjHJ33bYFzW-lFnlyIO13YPUxyi8N6qUVp9Oh7MD6hudq4wSv6gYumiDsSOga9jvF9wmOUTFgApB6i9fOyEwFDI0EDOl9wO7LwOgVcB-NLjtYvzk5ELNjWXGKTd37_Hop5LVJuhf_L7Ml56pHDFTjPRhpw_iMA49uYBS1O_higZGun1XTKJmGAWNh_jmcRZBb4sEsSVIc2B5q3zAyv--qLb-glLdqsGZngBF0XwjBm51vS6fbUpE9ElimYBKxU8QuyZezASNskQ2mkRACxUeX7UMdJERKB3cVndibbod6wXPzUpZRMX88gdjpswR5x29OgOHJrsCEXWpYluXgEguSvalXeWUgothIK2QgzIRAX35CrNNC-XuHpt2V7iZURN1OFeVxd0bDbYrUNSnX1R7FHnBDgi-ZrIqrbEIRIcNZ2CPcldBF3cVuDLGZnC1P463612lErEIgCVfEalvp-s5aV5MvAokWZBmioRsmkF3djVG9yuTWFQzCT3hbg5IZZwUbZ1KptiFlysM-uXyhrpiatiVExAgvna47VoljNbfjVp_9XBEZm7FJf_4chetuSsIYrcBQNxgzacpk31cgeW_p4bzeIo-64A6oHmI3F95yyTzqc2fY-ElEpqLL09KalKuf7zC8xlqg57VXrR5mF-nTYgy_73H9Q=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4M11Yy4rxEsgGAV4NDEMNS27XKq7aa15ucHxp0KvNr5XUP7wrCc0AAKvnQdkGQ8sY3D741yr5WGPjPRFQfz5WrtSFKhKj__FTeQM5x-o6BxlsRfBywkgmwOyFUIFNEGVAeIffB6dOzr0GqKerz8p96m-pQIzAD0QjIA23tHASpaNAehU_FsN9dwOdwKRmTcC9NV_14C1BUczPohwdVwJWO1sLJgFkpCAZfvy9QjUJOxaXI0dykTLW_XZ2hZ_AayKXGnyG94_RgB4ikGqQANVVV2PrNfltnshMouvayGxwwK1ShCbRPi185xt4bAsiR8ToojQNwgvmfDmlWVEz5e-frcfGiv6EArNdbkqC4CV6d-WTGZD3XiIGkoxSIChAo4gLCCDFVkFzUVSBXlMS26y8o881cnNHrYJWfMB0sHzcYWgD7jtxnEoBvVDiL8LEuZ1flkGNqyLgp26HdtJlo0nXijo07sSVld7JT2ujZEXI4zor2cpbszJ59_mcPziTumlfwRV1_w0pRfPmzEzr0K9pQsdSfGrhyHQN6i9yO7OjErUAHJM2_eAgbJw6u6goFoevpsJCU7Qomm2stuCWHvlS8FuS4swJ3ZsB5Mm4K29-C7zEFIPuYgcUlzGFw4Epy5cp7NNAZ-rBl9zZ8OaeIWmK0tpL6IYtxLBrHbgJWMePwqLVhy43nY9TXSvmTl-cFpsS2_ciHWWtS-zN7Tzq2Vo7l8Re7brxSGE5NkH6x4r5E6k1zNAn1pBHYVfGoInrnHIOr9smvUIZtw73KuG0GBdyl12APsP5GXztW6O4d6ksJtzzjbmyOiiwMVgxPetRFpjmDPI8a-7sGZVnHl9huBzHsecCCQ5ZUB8lTwLsgB0yGcWIDgekSEndWid24fGfFAg0rMI9P1zAkJy3IuV9F-RNTvEaDIM5an5mV-7LH_hSy8u6L9ERwUjkeIeHUMi_wdxkk4qrGA6g=w1920-h892'
    ]; 

    const mentorImages1 = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zzI1OzqL3u4WJ_gvUxSUm20qgfugx9mYtvUrpf-bIF_9YC0-jEZWzN-TJu2tb16lrmeZwnSrgLGAEXmeLFo6HuFzAaDw=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4NGulHxWumzCIBtVFf0oqyzUaSzpqV3e1n0Q-1gqe6-PKV03wUMROm7YKnvppTVouy7saqCHakF1ICcGjcXomQZlImYRK0o9dlnMauHbAfbnkjAmW7ubpzczpAloIEGsA7KjP5zn7nYihcI_zutchUdSwy8n6DViznBUxLf1CC0m83stwLHiKzuUlahElLyS7YIz8MpBjE7ovhx8fZaHJz0P8xdRkmDIvEAJz2RrMWPBnp17qHkqMrqHEjCj8dPCun68Vp5zprek8U9IqYhqOvAy-6o387CVN_d216_6h8EHFnKRBBl710i-2weGH25KKzMMncKNeJiKw0QWIe92uzSvnGXOhZiegIwEI_-jQk5Qm7VqL-K0q4ZQaLJFraHTZrSamACTQzmFgb8QVaZMuVIceC2wIfSC0b04-tbce6MGH50ry3oCsabi1u4AOSsoryPNkQusfECvQSqnUuJ5CQjYWeE4s4UJzpnJkbdvZRFjvbMq0m4nuA2AwAf1q1I7mG6UXmegv3XX7VgtFSUUpyfL-Ftv5UnkmHPoe7xtDS3DMMfsiBGiimBj_nIm-MrS7Ly2NOFQAFKN1-vewjkc23dr1GxyGUeOTDJ0dq6_C5amf9tibDVEHUcCWVhiXn551WCAfydl3L4klKXKJf-OXXXTS11gMCcBNj7k19YMIUwTx2skcfdGBZz0hT4QNvI180ISPcNp837kEaEk_2p_lZOY-GLNTCbKGI82cTASEZZ_xS8OeK_PzjQY0ZKdaNjpk07BJGZZgBWRnrrMz_kjZX-7dDHSnLgBv8RFnfTHBgmj7LCqg04VpDE6DJ6ZXdh82U2CshheejjDUO_4nGq6MHKGyJvdUimiB0M1XFhKxY8TrP0L_CasnlhU_HSw1QkN4k6ei0G9z5nhNn_qC3rlBrKxPPjPHn8wC1YGgalN_7JZcAJf8utQ90M2Gn49ESxAkKxQ2DuSg=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4N8nOT_M7PSVpUaLXE2hGsZe9-FA2dl9xy017sf9N_kZmJSDDRBnUf-xj7FkmMJngmoTXKnD0V4Mep-Xo603uabFbMuZTshBa4TJ4YyQMCdc384I2s0lj3Y1iX6LLU0e2XXLb4KUXeSCzeI9nlJMHm_LsgAx_IWw7PF0c-LMu-UOrCNF78wb4T_vqvV9PepI4iVIQHRA3LGQUWrahcKqgaHmnoqO1CzdPZwkkF-rCg9uOcd9W2J3uLZd-B5GbF9iBgNqIllIsFux2IzRPuRJSG2sRou0smIEulILLPhBl96TkyPAYLx_ucgyHmxHwojQeFEXQEzYZz1r3jjZYcdD9L7WWxoZkAmXPylY-ANFau6hDN2oz5TXd4UlriA3pcBGz0gfMbeAe9wzKjixwwjd9BW3jmy44ofzmrQlbszHyVDLRmSRC3iP4DUsRNlE9cPSQ8MYPavVo2FMhT2XtLowhNyeQiQX3eJSQmfU9bx8ofZXYjzIjiikTLFJwB-i_Kw0pX8dNRudtWbJXL2qHWpYZHKSv_xZpLseaT0YHMVQC64Omtdltr-m310Q4r9AIW-WPH1_rzLqihBrFvkpRRdfHjec_TODkXJloIZemzmEKeRb3smIsHl4KOwoMZVfDTDyD5zyTbKMgKDbQLg684xMKf6RtCFxMECdSLv6F1R8g7-ZkmP2ritpYig4asQMRtOgFZH-ErnpHcfTBfITz8NiTU2iR7FBqJXPqDI51rgGbruPzg2qca2IEbB8259nEtZJjkZxKKyEC9VDvo-3olzvtFhaAwgeE7DBvaxsOReMplaK9_eFs140u5miUUi5E8zdSVmKjiNvVzbtGQLNloWhJ1Gzke1VgN-OUN4ULDJl7EHZLBfezaKqeTbI98_sr3We4cXGTMeK4DEdVvtUXwhS7UJKO1z02cNY5zEIgQpc5iVaI5G2SMifuaU5fZAbBhCiNBaRE8PIA=w1920-h892',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-wNqZpvy_bklNTaoF6ttxi3SBR3lu3Fvhlw35ey8FS7SiH6l4_efhwrz5RwSp0hfsiIgO-TSCqYSv0vEsZwrgm_VRNz=w1920-h892',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w9XEiMsSm2vecEf-dQyrYLHSKH644fFXoFTgEgBJ0dBBk42QEA6GsBQ6lpY6QGziJDmhWtI8CJLhZ1jce7rwjhGBUBbQ=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4MwZWe1-QTVEly2hZHFH2gbxcFjrxJCL-2yqcstjcZNt37vX8EXm9ktbPyTlO3hFSsTWAkp2AN7vnWDTRZHF0HacBtuKEMLeIPBjN98AWV_FlfOO-tcXd3dV87UmBqGS5uVqr55x2wo8AetwQ0Skfzo2KdPTnnCf3PfsaDkPYJLEM6vBy7ouobYxc_0ZWjAW5uHdCpLz4NjPNd-_WtGDAIPQf7R9DkmBtznFtG2kE0rwTDNflfTNtZphoB-XZ6S6Ch9ZXBUDTsYxWiC_MOTFkAKovBq7ey88JE2U_JBttsFDpaiekvj1QM-jHvOgQWA6jTyo9gxyT2N6U2h0RMPctVZMw9SUae65jWG5QTTjm2xgDJGUdQpjQ7ob4yeZIModi92MiMysNTEj4TfWMTXlHw3Kyflg0oNws4P2NcHinROPtJKijfilvQCvFAkSmJrSJYJYSHEDQ12m7CzWfcH21S8Ob5i6VLs9V2lT06T2pSmttwCqnewurlXVH3XjBZoIpmIhopQdeGXCUvROMKbg9PYt94B7-5N5_j_o-a6T5S1qX4AlRAiVZBv1hzidhQno4DIfe79q3Y60lkVJUDh42lx7KwehZxZTyU_0AHuUtS4Npo5zSE5VL7b_PhF2CAm9x55-H9wlJ4Ltvc9dfnBfnKmfiSa6guD5nMhjiTbj7QGWIlptoW_GeemSXDeztwEIFrf12unvJP7Fnor6ICFqLTfVDIxbfisvu3A6MPu2TvJNnKVKJnzJSckWC4bbvTKIpz0og066YRexR1Ug7_bkkTE85Becdfy1PWUkvljxhl5u8eSQmhnBkYbl-cks7wTcDocLY4ZvcyLo-8bqYWO12ood779G7uej8ms2YQNXP4X2Zt4hHkGL4F5n8NollGSnnj9huke-MnR_geZ4v90T2XgvCVbgEREtRCvQ8aAaFGnnebZiyLwhB21ONLjT_Nj8yDxef8ZZg=w1920-h892',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w0NbireQX9dnrmDHtfDhNbbstST283dj6Mtia2JDZ5qmlp5WUxRE4o2UxgTTt80nI7R6wMuG_kQrV0TFKArW2MUmyPhw=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4PxbR-J2FbzytAojCLVe3fDVOY6jyyC-W8lm3RAYiUpSBpAIGfmxE8UOzN42w47Mhk0lVApA9dqRTbnayODskhTgOJ7WiXeHipY0Q1KeCqdDDhGyxfjs8QtRno2_vqmApseIzY3feNlO6dvYTjunHm-EqKYqWl3azo8lcQfuvJQLDxCbyuAP7gdOmfTOUUganvR5ePTCn-shYjtkUxJYGh_6TjGQtrKTMiwcUhg8COIAIrckTE5uQmnJ__TcvKPIQ3DcyjDBAfNupR_SJu0fC245EOGBiMWN6AdlKf5TrcLHyy5mlbT3ODDl7QWGlQakC3YTESWFEErv5ifSMzZse7KRN1sH5k9iF8Uz-J-Yf16nE1kaN6SPzDhygIF8pIfOpom6Y1D-dSrkqnYk0lob9Mp_k_QStGpOM7dzOgedkShKE_E3EyLwpNv2JNtjXb1HPISalCXYIN2H7YZrHTGNba6ldVHmamFPQFwXYtsyxBrUj7decDbrhz8yMZOMycA10YVls6c4KMxofvOqsdDns5TOJHcfL4kRy3DEIOU0b77kpqTwRDNFoVoRQ50RsHxXccbDtOXRiE1_5KJGuIFceay4hIAvj4O_VYa3ZuymRtOfahTSAoij6deS3LsIU2AL7OtVAdLU08cx8w0BgazPymIPekTWVHvu8dLGE7TF1EQZmPvq7CNy7BNQSsP48DcNAFMedD3MoJCEUPp60FxLQONHpaZ81LXwci1DmUd0r3BY39-KNytFv6ytm1HiTzwByKnBjcU2MsZoE4z0ujplZBORUidcvYb63di-zAySzNnIMmoSOrA7ICZHGRwmxFkQt1nkhtlhVoeXaD-EzYnjwPla1JRIUTh0WknO2o0vVmlWzWMg8rXQh5optz7numHvxJPs9eS8-OJSmFqCa1RH5WdeQiZLKmXH8VtCCWzQlHSTzqsxPdIv7Ik1ltjw-mdqQOdYcVnDQ=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4Ms5EnvV3ltIDVzruzrX7Oxnu7lMZM2v58GybA7jJFQj8sXhiy01Pi1xTspYOGiNhtTEby8QCGjwzy3wP3weCPOB_BR8Vpd9JsNMYFG-M0l4Ar1ZA51ZmsfMpU9ZLRg1CAS72RrWGgRkuA2zpwdAR8FErR6Cm3MvvU6txu0uJiGhixA1Mj7uVxCsYABNlkOnKP5BpI9mXlMVXkDFFtu9rv5VSppyxAOfAv8MwcvBZUYOgd-ANIJPBi-z9JfhCqj8KUEdCc8GeBLygKw_kUYyr6e0Jm0__n5lwpOB9xweghxYhDaidSHUreidOwQG44HECKI00fIfcUlDciFnskDXIp_7MDnO6a7-ZBJEsxNmtkpzksA5c5OGGGAyUz7Jw5E1c7SbGkZrqYQ3Z4snf3AndQjdpEFth30j-OKd8u1JdhUpuGzu1zQzHka2QOtAqe_06boH1_iEo2w-rSE3-1nOV5kYeTQWLvzrxuG2OXlun5_mkcHwf3NMTXBDICf4oalAUpsE3iwPKb3zSsWPMfOL7qRa8pYuoQjH6WWimLtBWmqMMoYxYW486J3VfGoUBDsGOHrUJxhkjA80TjPJqLOICGsqX7GMFXAbjR6ZHz0GUsGtJvQR5oeGS_G7AduRyEvhE4ecZSQgjlvRgvdZjgXmTGTqvUmdqDufsBbsjX5Cv84Oj8utcDbc0JOyxX1tuJ2Jj-N9iUQOodU2KWdKxVuMb5dw4H-FRXieCh7QGREQUdTv5msayzU9tMqvMTnHTAsMsXR-7Qqov3mj6gXBn881Hj5aLYRdgtEuy9OGZ7Pjtkl6OQCFc_K84AvGzV7x-IVMDeFKs7BMOy67Df3ASuDgaGty5vkPjsTU3GIukmrmOVBEoFmIU01-J0V-jw3u4OW7mkMjWNps69WOQzpTknIbau_1dwqrqC_9vKgEtMAzA0hiJaQ3LZi3TRwSQJbVLzxX8dWTLbF4g=w1920-h892',
    ];

    const mentorImages2 = [
        '',
    ];

    const mentorImages3 = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-z9rL2GRtFibG9MRC_pR4UpHde4HiW_Q7Ypj8eVKDGZhTRmxbg0ioBy43vGG2r2WnEkl6xuUznXSMjXUmoW52ICXJqi=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4N3KDx776MRoSB-cAtlnTFDRgQ069A7aia7dIs9LgEpVuZpe0iRxMHC2wssMrXOcJ6pSWTJ6Ongl_B3I4DHeIxHMFQWKulsDy8xD8Az-d_lBXLWhjQTWwrNUB_Grve4fa3R4tprkC1WF7zbrb-5kgX9r4-ASslBTNq-vhxflyktqTuPWU6-RRGXqtEQAKPHwfdeca35UCb2XsPkmVI3xeoRDR2iWngfM79ZgaENik8Qn3-ldEaTaO49UpZyi8zuCIMImT_OUOgnxvZxqvRZo-ZZl2J5sy9JE6K-Nna5KFQhLjHJ33bYFzW-lFnlyIO13YPUxyi8N6qUVp9Oh7MD6hudq4wSv6gYumiDsSOga9jvF9wmOUTFgApB6i9fOyEwFDI0EDOl9wO7LwOgVcB-NLjtYvzk5ELNjWXGKTd37_Hop5LVJuhf_L7Ml56pHDFTjPRhpw_iMA49uYBS1O_higZGun1XTKJmGAWNh_jmcRZBb4sEsSVIc2B5q3zAyv--qLb-glLdqsGZngBF0XwjBm51vS6fbUpE9ElimYBKxU8QuyZezASNskQ2mkRACxUeX7UMdJERKB3cVndibbod6wXPzUpZRMX88gdjpswR5x29OgOHJrsCEXWpYluXgEguSvalXeWUgothIK2QgzIRAX35CrNNC-XuHpt2V7iZURN1OFeVxd0bDbYrUNSnX1R7FHnBDgi-ZrIqrbEIRIcNZ2CPcldBF3cVuDLGZnC1P463612lErEIgCVfEalvp-s5aV5MvAokWZBmioRsmkF3djVG9yuTWFQzCT3hbg5IZZwUbZ1KptiFlysM-uXyhrpiatiVExAgvna47VoljNbfjVp_9XBEZm7FJf_4chetuSsIYrcBQNxgzacpk31cgeW_p4bzeIo-64A6oHmI3F95yyTzqc2fY-ElEpqLL09KalKuf7zC8xlqg57VXrR5mF-nTYgy_73H9Q=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4M11Yy4rxEsgGAV4NDEMNS27XKq7aa15ucHxp0KvNr5XUP7wrCc0AAKvnQdkGQ8sY3D741yr5WGPjPRFQfz5WrtSFKhKj__FTeQM5x-o6BxlsRfBywkgmwOyFUIFNEGVAeIffB6dOzr0GqKerz8p96m-pQIzAD0QjIA23tHASpaNAehU_FsN9dwOdwKRmTcC9NV_14C1BUczPohwdVwJWO1sLJgFkpCAZfvy9QjUJOxaXI0dykTLW_XZ2hZ_AayKXGnyG94_RgB4ikGqQANVVV2PrNfltnshMouvayGxwwK1ShCbRPi185xt4bAsiR8ToojQNwgvmfDmlWVEz5e-frcfGiv6EArNdbkqC4CV6d-WTGZD3XiIGkoxSIChAo4gLCCDFVkFzUVSBXlMS26y8o881cnNHrYJWfMB0sHzcYWgD7jtxnEoBvVDiL8LEuZ1flkGNqyLgp26HdtJlo0nXijo07sSVld7JT2ujZEXI4zor2cpbszJ59_mcPziTumlfwRV1_w0pRfPmzEzr0K9pQsdSfGrhyHQN6i9yO7OjErUAHJM2_eAgbJw6u6goFoevpsJCU7Qomm2stuCWHvlS8FuS4swJ3ZsB5Mm4K29-C7zEFIPuYgcUlzGFw4Epy5cp7NNAZ-rBl9zZ8OaeIWmK0tpL6IYtxLBrHbgJWMePwqLVhy43nY9TXSvmTl-cFpsS2_ciHWWtS-zN7Tzq2Vo7l8Re7brxSGE5NkH6x4r5E6k1zNAn1pBHYVfGoInrnHIOr9smvUIZtw73KuG0GBdyl12APsP5GXztW6O4d6ksJtzzjbmyOiiwMVgxPetRFpjmDPI8a-7sGZVnHl9huBzHsecCCQ5ZUB8lTwLsgB0yGcWIDgekSEndWid24fGfFAg0rMI9P1zAkJy3IuV9F-RNTvEaDIM5an5mV-7LH_hSy8u6L9ERwUjkeIeHUMi_wdxkk4qrGA6g=w1920-h892'
    ];

    const mentorImages4 = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-z9rL2GRtFibG9MRC_pR4UpHde4HiW_Q7Ypj8eVKDGZhTRmxbg0ioBy43vGG2r2WnEkl6xuUznXSMjXUmoW52ICXJqi=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4N3KDx776MRoSB-cAtlnTFDRgQ069A7aia7dIs9LgEpVuZpe0iRxMHC2wssMrXOcJ6pSWTJ6Ongl_B3I4DHeIxHMFQWKulsDy8xD8Az-d_lBXLWhjQTWwrNUB_Grve4fa3R4tprkC1WF7zbrb-5kgX9r4-ASslBTNq-vhxflyktqTuPWU6-RRGXqtEQAKPHwfdeca35UCb2XsPkmVI3xeoRDR2iWngfM79ZgaENik8Qn3-ldEaTaO49UpZyi8zuCIMImT_OUOgnxvZxqvRZo-ZZl2J5sy9JE6K-Nna5KFQhLjHJ33bYFzW-lFnlyIO13YPUxyi8N6qUVp9Oh7MD6hudq4wSv6gYumiDsSOga9jvF9wmOUTFgApB6i9fOyEwFDI0EDOl9wO7LwOgVcB-NLjtYvzk5ELNjWXGKTd37_Hop5LVJuhf_L7Ml56pHDFTjPRhpw_iMA49uYBS1O_higZGun1XTKJmGAWNh_jmcRZBb4sEsSVIc2B5q3zAyv--qLb-glLdqsGZngBF0XwjBm51vS6fbUpE9ElimYBKxU8QuyZezASNskQ2mkRACxUeX7UMdJERKB3cVndibbod6wXPzUpZRMX88gdjpswR5x29OgOHJrsCEXWpYluXgEguSvalXeWUgothIK2QgzIRAX35CrNNC-XuHpt2V7iZURN1OFeVxd0bDbYrUNSnX1R7FHnBDgi-ZrIqrbEIRIcNZ2CPcldBF3cVuDLGZnC1P463612lErEIgCVfEalvp-s5aV5MvAokWZBmioRsmkF3djVG9yuTWFQzCT3hbg5IZZwUbZ1KptiFlysM-uXyhrpiatiVExAgvna47VoljNbfjVp_9XBEZm7FJf_4chetuSsIYrcBQNxgzacpk31cgeW_p4bzeIo-64A6oHmI3F95yyTzqc2fY-ElEpqLL09KalKuf7zC8xlqg57VXrR5mF-nTYgy_73H9Q=w1920-h892',
        'https://lh3.googleusercontent.com/fife/AKsag4M11Yy4rxEsgGAV4NDEMNS27XKq7aa15ucHxp0KvNr5XUP7wrCc0AAKvnQdkGQ8sY3D741yr5WGPjPRFQfz5WrtSFKhKj__FTeQM5x-o6BxlsRfBywkgmwOyFUIFNEGVAeIffB6dOzr0GqKerz8p96m-pQIzAD0QjIA23tHASpaNAehU_FsN9dwOdwKRmTcC9NV_14C1BUczPohwdVwJWO1sLJgFkpCAZfvy9QjUJOxaXI0dykTLW_XZ2hZ_AayKXGnyG94_RgB4ikGqQANVVV2PrNfltnshMouvayGxwwK1ShCbRPi185xt4bAsiR8ToojQNwgvmfDmlWVEz5e-frcfGiv6EArNdbkqC4CV6d-WTGZD3XiIGkoxSIChAo4gLCCDFVkFzUVSBXlMS26y8o881cnNHrYJWfMB0sHzcYWgD7jtxnEoBvVDiL8LEuZ1flkGNqyLgp26HdtJlo0nXijo07sSVld7JT2ujZEXI4zor2cpbszJ59_mcPziTumlfwRV1_w0pRfPmzEzr0K9pQsdSfGrhyHQN6i9yO7OjErUAHJM2_eAgbJw6u6goFoevpsJCU7Qomm2stuCWHvlS8FuS4swJ3ZsB5Mm4K29-C7zEFIPuYgcUlzGFw4Epy5cp7NNAZ-rBl9zZ8OaeIWmK0tpL6IYtxLBrHbgJWMePwqLVhy43nY9TXSvmTl-cFpsS2_ciHWWtS-zN7Tzq2Vo7l8Re7brxSGE5NkH6x4r5E6k1zNAn1pBHYVfGoInrnHIOr9smvUIZtw73KuG0GBdyl12APsP5GXztW6O4d6ksJtzzjbmyOiiwMVgxPetRFpjmDPI8a-7sGZVnHl9huBzHsecCCQ5ZUB8lTwLsgB0yGcWIDgekSEndWid24fGfFAg0rMI9P1zAkJy3IuV9F-RNTvEaDIM5an5mV-7LH_hSy8u6L9ERwUjkeIeHUMi_wdxkk4qrGA6g=w1920-h892'
    ];

    return (
        <div className='justify-center items-center'
        style={{
            paddingBottom: '10rem',
        }}>
        <div className='flex flex-col justify-center items-center w-full my-8 sm:my-16 h-fit'>
        <div className='uppercase bg-[#39B66D] rounded-[40px] text-center sm:rounded-[10rem] border-2 border-black w-3/5 sm:w-[55%] lg:w-[60%] p-2 sm:p-4 my-14 z-[10]'>
            <p
                className='text-neutral-800 text-3xl sm:text-4xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] tracking-tighter uppercase m-0 py-3'
                style={{
                textShadow: '0 6px 8px rgba(0,0,0,0.25)',
                }}
                >
                meet the crew
            </p>
        </div>
        </div>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            slidesToSlide={1}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <div>
                <button onClick={handleClick}>
                <FlipCard teamName={<>Design<br />Team </>} bg={'bg-[#277FE6]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick}>
                <Card 
                    bg={'bg-[#277FE6]'} 
                    teamName="Design Team" 
                    teamMembers={["Abhinav Sharma", "Ananya Sachdev", "Omansh Arora", "Sarthak Gupta", "Virat"]}
                    memberImages={designImages} 
                    customImageStyle={customImageStyles[1]} />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped1} flipDirection="vertical">
            <div>
                <button onClick={handleClick1}>
                <FlipCard teamName={<>Web Dev<br />Team </>} bg={'bg-[#39B66D]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick1}>
                <Card 
                    bg={'bg-[#39B66D]'} 
                    teamName="Web Dev Team" 
                    teamMembers={["Aadya\n", "Ayush Gupta\n", "Sumit Kumar"]} 
                    memberImages={webImages} 
                    customImageStyle={customImageStyles[0]}
                    />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped2} flipDirection="vertical">
            <div>
                <button onClick={handleClick2}>
                <FlipCard teamName={<>App Dev<br />Team </>} bg={'bg-[#E44F44]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick2}>
                <Card 
                    bg={'bg-[#E44F44]'} 
                    teamName="App Dev Team" 
                    teamMembers={["Aayush", "Antonio Pedro", "Shobhit Verma"]} 
                    memberImages={appImages} 
                    customImageStyle={customImageStyles[0]}
                />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped3} flipDirection="vertical">
            <div>
                <button onClick={handleClick3}>
                <FlipCard teamName={<>Operation<br />Team </>} bg={'bg-[#4D2885]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick3}>
                <Card 
                    bg={'bg-[#4D2885]'} 
                    teamName="Operation Team" 
                    teamMembers={["Anant Kaushal", "Ansh Varshney", "Harshvardhan Chourasia", "Neelu", "Rahul Goel", "Ritviek Padda", "Tushar Kumar", "Vashu", "Vipul Mishra"]} 
                    memberImages={operationsImages} 
                    customImageStyle={customImageStyles[2]}/>
                </button>
            </div>
        </ReactCardFlip>
        {/* <ReactCardFlip isFlipped={isFlipped4} flipDirection="vertical">
            <div>
                <button onClick={handleClick4}>
                <FlipCard teamName={<>Content<br />Team </>} bg={'bg-[#277FE6]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick4}>
                <Card bg={'bg-[#277FE6]'} teamName="Content Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip> */}
        <ReactCardFlip isFlipped={isFlipped5} flipDirection="vertical">
            <div>
                <button onClick={handleClick5}>
                <FlipCard teamName={<>Core<br />Team </>} bg={'bg-[#39B66D]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick5}>
                <Card 
                    bg={'bg-[#39B66D]'} 
                    teamName="Core Team" 
                    teamMembers={["Anand Vimal", "Krishna Ayyagari", "Meet Popat", "Saumya"]} 
                    memberImages={coreImages} 
                    customImageStyle={customImageStyles[0]}
                />
                </button>
            </div>
        </ReactCardFlip>
        {/* <ReactCardFlip isFlipped={isFlipped6} flipDirection="vertical">
            <div>
                <button onClick={handleClick6}>
                <FlipCard teamName={<>Events<br />Team </>} bg={'bg-[#E44F44]'} />,
                </button>
            </div>
            <div>
                <button onClick={handleClick6}>
                <Card bg={'bg-[#E44F44]'} teamName="Events Team" teamMembers={["Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut", "Donut"]} />,
                </button>
            </div>
        </ReactCardFlip> */}
        <ReactCardFlip isFlipped={isFlipped7} flipDirection="vertical">
            <div>
                <button onClick={handleClick7}>
                <FlipCard teamName={<> Mentors</>} bg={'bg-[#4D2885]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick7}>
                <Card 
                    bg={'bg-[#4D2885]'} 
                    teamName="Mentors" 
                    teamMembers={["Gagan", "Shagun", "Aayush", "Aditi Sharma", "Aryan Jain", "Vikrant", "Mohmmad Ayaan", "Dhruv Garg", "Ekansh"]} 
                    memberImages={mentorImages1} 
                    customImageStyle={customImageStyles[2]}
                    />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped7} flipDirection="vertical">
            <div>
                <button onClick={handleClick7}>
                <FlipCard teamName={<> Mentors</>} bg={'bg-[#4D2885]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick7}>
                <Card 
                    bg={'bg-[#4D2885]'} 
                    teamName="Mentors" 
                    teamMembers={["Bhavy Chawla", "Nishant Kumar Singh", "Kirti Jain", "Kumar Saksham", "Manasva Mittal", "Mehul Arora", "Naman Birla", "Piyush Kumar", "Pooja"]} 
                    memberImages={mentorImages2} 
                    customImageStyle={customImageStyles[2]}
                    />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped7} flipDirection="vertical">
            <div>
                <button onClick={handleClick7}>
                <FlipCard teamName={<> Mentors</>} bg={'bg-[#4D2885]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick7}>
                <Card 
                    bg={'bg-[#4D2885]'} 
                    teamName="Mentors" 
                    teamMembers={["Rahul Agrawal", "Raj Gupta", "Ritika Thakur", "Riya Gupta", "Riya Sachdeva", "Rohan Indora", "Sarthak Gupta", "Satvik Fotedar", "Satyam Arora"]} 
                    memberImages={mentorImages3} 
                    customImageStyle={customImageStyles[2]}
                    />
                </button>
            </div>
        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped7} flipDirection="vertical">
            <div>
                <button onClick={handleClick7}>
                <FlipCard teamName={<> Mentors</>} bg={'bg-[#4D2885]'} />
                </button>
            </div>
            <div>
                <button onClick={handleClick7}>
                <Card 
                    bg={'bg-[#4D2885]'} 
                    teamName="Mentors" 
                    teamMembers={["Siddhant Bali", "Vijval Ekbote", "Vimansh Mahajan", "Vishesh Jain", "Vishnu Vardhan"]} 
                    memberImages={mentorImages4} 
                    customImageStyle={customImageStyles[2]}
                    />
                </button>
            </div>
        </ReactCardFlip>
        </Carousel>
        </div>
    );
};

export default Team;