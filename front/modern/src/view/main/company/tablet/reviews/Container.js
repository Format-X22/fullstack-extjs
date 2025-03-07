/**
 * Контейнер со списком отзывов о отправкой новых отзывов.
 */
Ext.define('A.view.main.company.tablet.reviews.Container', {
    extend: 'Ext.container.Container',
    xtype: 'companyTabletReviewsContainer',

    requires: [
        'A.view.main.company.tablet.reviews.List',
        'A.view.main.company.tablet.reviews.Send'
    ],

    title: 'Отзывы',
    height: '100%',

    layout: {
        type: 'hbox',
        pack: 'center'
    },

    items: [
        {
            itemId: 'reviewsTabPanel',
            xtype: 'tabpanel',
            width: '100%',
            height: '100%',
            padding: '15 0',
            layout: {
                type: 'card',
                animation: 'flip'
            },
            defaults: {
                tab: {
                    minWidth: '15%'
                }
            },
            items: [
                {
                    itemId: 'list',
                    xtype: 'companyTabletReviewsList',
                    title: 'Все отзывы',
                    iconCls: 'x-fa fa-th-list'
                },
                {
                    itemId: 'send',
                    xtype: 'companyTabletReviewsSend',
                    title: 'Оставить свой отзыв',
                    iconCls: 'x-fa fa-pencil'
                }
            ]
        }
    ]
});