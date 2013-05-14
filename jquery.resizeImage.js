/**
 * Plugin responsável por mostrar configurações da imagem
 *
 * Usa o plugin Slider do Jquery UI
 *
 * Git: https://github.com/cagartner/JqueryResizeImage
 *
 * @exemple http://carlosgartner.com.br/JqueryResizeImage/example.html
 * @author Carlos Augusto Gartner <carlos@we3online.com.br>
 */
;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "resizeImage",
        defaults   = {
            container: '',
			alvo: 	   '',
			slider: {
				id: 		'rksSliderVertical',
				size: 	 	 0,
				min: 		 0,
				init: 		 50,
				max: 		 100,
				orientation: 'horizontal',
				range: 		 'min',
				html:        ''
			}
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
    	/**
		 * Funcao para inicia a classe
		 * @return {void} 
		 */
        init: function() {
			var me = this.options;
			var fc = this;

			// Seta o alvo que irá ser redimensionado
			me.alvo = this.element;

			// Seta posicao inicial do slider
			me.slider.init = $(this.element).width();

			// Define tamanho do slider de acordo com o tamanho do cotainer
			me.slider.size = $(me.container).width();

			// Cria o html do slider e adicioa no container
			fc.createResizeControlsHtml();

			// Executa quando o mouse estiver sobre o container
			$(me.container).hover(function () {
				fc.showResizeControls();
			}, function () {
				fc.hideResizeControls();
			});
		},

		/**
		 * Gera o html para o slider e adiciona na parte inferior do container
		 * @return {void}
		 */
        createResizeControlsHtml: function(el, options) {
            var me         = this.options;
			me.slider.html = '<div id="'+me.slider.id+'" style="'+(me.slider.orientation == 'vertical' ? 'height' : 'width')+': '+me.slider.size+'px;"></div>'
			$(me.container).append(me.slider.html);

			// CSS do slider
			$('#'+me.slider.id).css({
				background: 'white',
				position:   'absolute',
				bottom: 	'5px',
				left: 		'0px',
				zIndex: 	100
			}).hide();

			// Configurações do plugin slider do Jquery UI
			$( "#"+me.slider.id ).slider({
				orientation: me.slider.orientation,
				range: 		 me.slider.range,
				min: 		 me.slider.min,
				max: 		 me.slider.max,
				value: 		 me.slider.init,
				slide: function( event, ui ) {
					$(me.alvo).css({
						height: ui.value,
						width:  ui.value
					});
				}
			});
        },

        /**
		 * Exibe os controles
		 * @return {void} 
		 */
        showResizeControls: function () 
		{
			var me = this.options;
			$('#'+me.slider.id).fadeIn();
		},

		/**
		 * Esconde os controles
		 * @return {void} 
		 */
		hideResizeControls: function () 
		{
			var me = this.options;
			$('#'+me.slider.id).fadeOut();
		}

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );