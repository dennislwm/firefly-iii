/*
 * month.js
 * Copyright (c) 2017 thegrumpydictator@gmail.com
 *
 * This file is part of Firefly III.
 *
 * Firefly III is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Firefly III is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Firefly III. If not, see <http://www.gnu.org/licenses/>.
 */
$(function () {
    "use strict";

    loadAjaxPartial('opsAccounts', opsAccountsUri);
    loadAjaxPartial('opsAccountsAsset', opsAccountsAssetUri);

    multiCurrencyPieChart(categoryOutUri, 'category-out-pie-chart');
    multiCurrencyPieChart(categoryInUri, 'category-in-pie-chart');
    multiCurrencyPieChart(budgetsOutUri, 'budgets-out-pie-chart');
    multiCurrencyPieChart(tagOutUri, 'tag-out-pie-chart');
    multiCurrencyPieChart(tagInUri, 'tag-in-pie-chart');

    $.each($('.main_double_canvas'), function (i, v) {
        var canvas = $(v);
        columnChart(canvas.data('url'), canvas.attr('id'));
    });

    loadAjaxPartial('topExpensesHolder', topExpensesUri);
    loadAjaxPartial('avgExpensesHolder', avgExpensesUri);
    loadAjaxPartial('topIncomeHolder', topIncomeUri);
    loadAjaxPartial('avgIncomeHolder', avgIncomeUri);

});

