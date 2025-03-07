/**
 * Абстрактный контроллер админки.
 * Требует имплементации методов
 * {@link #getModelClassName},
 * {@link #isStatsExits},
 * {@link #applyDataToCharts}.
 */
Ext.define('A.view.admin.MainController', {
    extend: 'Ext.app.ViewController',

    config: {

        /**
         * @cfg {Ext.data.Model} record Модель данных.
         */
        record: null
    },

    /**
     * Загружает данные партнера.
     */
    loadData: function () {
        var view = this.getView();
        
        this.applyRecordIfNeed();

        view.mask();
        this.getRecord().load({
            success: function () {
                this.applyLoadedData();
                view.unmask();
            },
            failure: view.unmask.bind(view),
            scope: this
        });
    },

    /**
     * @protected
     * @method getModelClassName (required)
     * @template
     * @return {String} Имя модели данных админки.
     */
    getModelClassName: Ext.emptyFn,

    /**
     * @protected
     * @method isStatsExits (required)
     * @template
     * @return {Boolean} Имеется ли какая-либо статистика.
     */
    isStatsExits: Ext.emptyFn,

    /**
     * @protected
     * @method applyDataToCharts (required)
     * @template
     */
    applyDataToCharts: Ext.emptyFn,

    /**
     * @protected
     * Установка загруженных данных.
     */
    applyLoadedData: function () {
        var view = this.getView();
        var fields = A.getAllCmp('field', view);
        var htmlEditors = A.getAllCmp('htmleditor', view);

        [].push.apply(fields, htmlEditors);

        view.loadRecord(this.getRecord());

        Ext.each(fields, function (field) {
            field.resetOriginalValue();
        }, this);

        if (this.isStatsExits()) {
            this.applyDataToCharts();
            this.showCharts();
        }
    },
    
    privates: {

        /**
         * @private
         */
        applyRecordIfNeed: function () {
            if (!this.getRecord()) {
                this.setRecord(Ext.create(this.getModelClassName()));
            }
        },

        /**
         * @private
         */
        showCharts: function () {
            var root = this.getView();
            var placeholders = A.getAllCmp('#placeholder', root);
            var charts = A.getAllCmp('#chart', root);

            Ext.each(placeholders, function (placeholder) {
                placeholder.hide();
            });

            Ext.each(charts, function (chart) {
                chart.show();
            });
        }
    }
});