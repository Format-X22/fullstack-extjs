/**
 * Вкладка описания в деталях компании, для планшетов.
 */
Ext.define('A.view.main.company.tablet.Summary', {
    extend: 'Ext.Container',
    xtype: 'companySummaryTablet',

    cls: 'company-summary company-summary-tablet',
    layout: 'hbox',
    scrollable: 'vertical',
    padding: 15,

    items: [
        {
            xtype: 'container',
            width: 330,
            items: [
                {
                    xtype: 'img',
                    width: 300,
                    height: 300,
                    bind: {
                        src: 
                            'http://res.cloudinary.com/hycanb7c0/image/upload/w_300,h_300/{_id}.png'
                    }
                },
                {
                    xtype: 'component',
                    padding: '15 0',
                    bind: {
                        html:
                            '<div class="property">' +
                                '<div class="title">Рейтинг</div> <div class="value">{formatRating}</div>' +
                            '</div>' +
                            '<div class="property">' +
                                '<div class="title">Телефон</div> <div class="value tel">{formatPhone}</div>' +
                            '</div>' +
                            '<div class="property">' +
                                '<div class="title">Сайт</div> <div class="value url">{formatSite}</div>' +
                            '</div>' +
                            '<div class="property">' +
                                '<div class="title">Почта</div> <div class="value email">{formatEmail}</div>' +
                            '</div>' +
                            '<div class="property">' +
                                '<div class="title">Время работы</div> <div class="value workhours">{time}</div>' +
                            '</div>' +
                            '<div class="property">' +
                                '<div class="title">Адрес</div> <div class="value adr">{mobileFormatAddress}</div>' +
                            '</div>'
                    }
                }
            ]
        },
        {
            xtype: 'component',
            cls: 'separator-vertical',
            padding: '0 5 20 20',
            flex: 1,
            bind: {
                html: '{summary}'
            }
        }
    ]
});