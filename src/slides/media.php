<?php

$mediaList = [
  [
    'url' => 'https://www.ccn.com/sharpay-share-buttons-successfully-raised-2400-eth-presale-announcing-token-sale/',
    'image' => '/images/media/ccn.svg',
    'cls' => 'media-cnn'
  ],
  [
    'url' => 'https://btcmanager.com/sharpay-ico-review/',
    'image' => '/images/media/btcmanager.png'
  ],
  [
    'url' => 'https://cryptosrus.com/sharpay-share-buttons-successfully-raised-2400-eht-presale-announcing-token-sale/',
    'image' => '/images/media/cryptosrus.png',
    'cls' => 'media-cryptorus'
  ],
  [
    'url' => 'https://www.newsbtc.com/2018/02/23/sharpay-share-buttons-successfully-raised-2400-eth-presale-announcing-token-sale/',
    'image' => '/images/media/newsbtc.png',
    'cls' => 'media-newsbtc'
  ],
  [
    'url' => 'http://bitcoinist.com/sharpay-share-buttons-successfully-raised-2400-eht-presale-announcing-token-sale/',
    'image' => '/images/media/bitcoinist.png'
  ],
  [
    'url' => 'https://themerkle.com/sharpay-share-buttons-successfully-raised-2400-eth-in-presale-and-announcing-token-sale/',
    'image' => '/images/media/themerkle.png'
  ],
  [
    'url' => 'https://bitscreener.com/news/sharpay-share-buttons-successfully-raised',
    'image' => '/images/media/bitscreener.png'
  ],
  [
    'url' => 'http://www.livebitcoinnews.com/sharpay-share-buttons-successfully-raised-2400-eht-presale-announcing-token-sale/',
    'image' => '/images/media/livebitcoinnews.png',
    'cls' => 'media-bitcoinnews'
  ],
  [
    'url' => 'https://coinjournal.net/pr-release/sharpay-share-buttons-successfully-raised-2400-eht-presale-now-announcing-token-sale/',
    'image' => '/images/media/coinjournal.png'
  ],
  [
    'url' => 'https://www.cryptoninjas.net/2018/02/23/sharpay-share-buttons-successfully-raises-2400-eth-presale/',
    'image' => '/images/media/cryptoninjias.png',
    'cls' => 'media-cryptoninjias'
  ],
  [
    'url' => 'https://www.coinstaker.com/sharpay-share-buttons-successfully-raised-2400-eht-presale-announcing-token-sale/',
    'image' => '/images/media/coinstaker.png',
    'cls' => 'media-coinstaker'
  ]
];

?>

<style type="text/css">

  button.slick-arrow {
    background: #313131;
  }

  button.slick-arrow img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;

    opacity: 0.3;
  }

  button.slick-arrow img:hover {
    opacity: 1;
  }

  #media-carousel {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .media-img {
    height: 50px;
    margin: 10px 25px;
  }

  /* logo is to long and narrow */
  .media-cryptorus {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  /* white background */
  .media-newsbtc, .media-cryptoninjias {
    background: white;
    border: solid 5px white;
  }

  /* making logo bigger */
  .media-bitcoinnews {
    margin: 3px 25px 7px 25px;
    height: 70px;
  }

  /* logo is too big - making it smaller */
  .media-cnn, .media-coinstaker {
    height: 36px;
    margin: 17px 25px;
  }

</style>

<div id="media" class="section section-dark">
  <div class="container">

    <div id="media-carousel" style="display:none;">
      <? foreach ( $mediaList as $media ) { ?>
      <div>
        <a href="<?=$media['url']?>" target="_blank">
          <img class="media-img <?= isset($media['cls']) ? $media['cls'] : ''?>"  src="<?=$media['image']?>" />
        </a>
      </div>
      <? } ?>
    </div>

  </div>
</div>