/**
 * Редактор фото.
 */
Ext.define('A.view.client.editor.Photo', {
    extend: 'Ext.form.Panel',
    xtype: 'clientEditorPhoto',
    controller: 'clientEditorPhoto',

    requires: [
        'A.view.client.editor.PhotoController'
    ],

    layout: 'vbox',

    listeners: {
        dirtychange: 'toggleSaveToolbar'
    },
    
    items: [
        {
            xtype: 'widgetSaveToolbar'
        },
		{
			xtype: 'adminTopDescription',
			html:
				'Эти фотографии увидят ваши потенциальные клиенты.<br>' +
				'Чем лучше будут фотографии и чем точнее они опишут ваш род деятельности,<br>' +
				'тем больше вероятность того что потенциальный клиент станет реальным клиентом.<br><br>' +
                'Загруженные фото будут обновлены в течении нескольких часов.'
		},
        {
            xtype: 'clientEditorWidgetSplitLine'
        },
        {
            xtype: 'container',
            padding: '20 20 20 50',
            flex: 1,
            width: '100%',
            scrollable: 'vertical',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    defaults: {
						margin: '4 0',
                        width: 600,
                        msgTarget: 'under',
                        validateOnChange: false,
                        validateOnBlur: false,
                        regex: /(.(png|jpg))$|^Загружено успешно!$/i,
                        regexText: 'Разрешены только файлы jpg и png.'
                    },
                    items: [
                        {
                            name: 'logo',
                            xtype: 'filefield',
                            fieldLabel: 'Логотип'
                        },
                        {
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'right'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    text: 'Нарисуйте за меня (бесплатно)',
                                    width: 495,
                                    handler: 'drawForMe'
                                }
                            ]
                        },
                        {
                            xtype: 'component',
                            padding: '0 0 25 110',
                            html:
                                '<i>Логотип отображается в поиске и в информации о компании.<br>' +
                                'Лучше всего подойдет картинка размером 300 на 300 пикселей в формате png.</i>'
                        },
                        {
                            name: 'photo1',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №1'
                        },
                        {
                            name: 'photo2',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №2'
                        },
                        {
                            name: 'photo3',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №3'
                        },
                        {
                            name: 'photo4',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №4'
                        },
                        {
                            name: 'photo5',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №5'
                        },
                        {
                            name: 'photo6',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №6'
                        },
                        {
                            name: 'photo7',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №7'
                        },
                        {
                            name: 'photo8',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №8'
                        },
                        {
                            name: 'photo9',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №9'
                        },
                        {
                            name: 'photo10',
                            xtype: 'filefield',
                            fieldLabel: 'Фото №10'
                        }
                    ]
                }
            ]
        }
    ]
});